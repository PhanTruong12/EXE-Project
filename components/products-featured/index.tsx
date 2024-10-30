import ProductsCarousel from './carousel';
import useSwr from 'swr';
import { getData } from '../../utils/services'; 

const ProductsFeatured = () => {
  const fetcher = () => getData('/Products/GetRandomProducts');
  const { data } = useSwr('/Products/GetRandomProducts', fetcher);

  return (
    <section className="section section-products-featured">
      <div className="container">
        <header className="section-products-featured__header">
          <h3>Selected just for you</h3>
          <a href="/products" className="btn btn--rounded btn--border">Show All</a>
        </header>

        <ProductsCarousel products={data} />
      </div>
    </section>
  )
};

export default ProductsFeatured