import useSwr from 'swr';
import ProductItem from '../../product-item';
import ProductsLoading from './loading';
import { ProductTypeList } from 'types';
import { getData } from '../../../utils/services'; 

const ProductsContent = () => {
  const fetcher = () => getData('/Products/GetAllProducts');
  const { data, error } = useSwr('/Products/GetAllProducts', fetcher);

  if (error) return <div>Failed to load users</div>;
  return (
    <>
      {!data && 
        <ProductsLoading />
      }

      {data &&
        <section className="products-list">
          {data.map((item: ProductTypeList)  => (
            <ProductItem 
              productId={item.productId} 
              productName={item.productName}
              unitPrice={item.unitPrice}
              currentPrice={item.currentPrice ?? item.unitPrice}
              key={item.productId}
              productImages={item.productImages} 
            />
          ))}
        </section>
      }
    </>
  );
};
  
export default ProductsContent