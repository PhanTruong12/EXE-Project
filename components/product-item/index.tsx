import Link from 'next/link';
import { some } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavProduct } from 'store/reducers/user';
import { RootState } from 'store';
import { ProductTypeList } from 'types';

const ProductItem = ({ discount, productImages, productId, productName, currentPrice }: ProductTypeList) => {
  const dispatch = useDispatch();
  const { favProducts } = useSelector((state: RootState) => state.user);

  const isFavourite = some(favProducts, productId => productId === productId);
  console.log(productImages);
  const toggleFav = () => {
    dispatch(toggleFavProduct(
      { 
        id: productId,
      }
    ));
  };

  return (
    <div className="product-item">
      <div className="product__image">
        <button type="button" onClick={toggleFav} className={`btn-heart ${isFavourite ? 'btn-heart--active' : ''}`}>
          <i className="icon-heart"></i>
        </button>

        <Link href={`/product/${productId}`}>
          {/* <img src={images ? images[0] : ''} alt="product" /> */}
          <img src={`data:image/png;base64,${productImages ? productImages[0].imageData : ''}`} alt="Product" />
          {discount && 
            <span className="product__discount">{discount}VND</span>
          }
        </Link>
      </div>
      
      <div className="product__description">
        <h3>{productName}</h3>
        <div className={"product__price " + (discount ? 'product__price--discount' : '')}>
          <h4>{currentPrice}VND</h4>
          {discount &&  
            <span>{currentPrice}VND</span> 
          }
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
