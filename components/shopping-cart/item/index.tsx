import { useDispatch } from 'react-redux';
import { removeProduct, setCount } from 'store/reducers/cart';
import { ProductStoreType } from 'types';

const ShoppingCart = ({ thumb, productName, productId, hireDate, startTime, endTime, count, unitPrice }: ProductStoreType) => {
  const dispatch = useDispatch();


  const removeFromCart = () => {
    dispatch(removeProduct(
      { 
        thumb, 
        productName, 
        productId, 
        hireDate,
        startTime, 
        endTime,
        count, 
        unitPrice
      }
    ))
  }

  const setProductCount = (count: number) => {
    if(count <= 0) {
      return;
    }

    const payload = {
      product: { 
        thumb, 
        productName, 
        productId, 
        hireDate,
        startTime, 
        endTime,
        count, 
        unitPrice
      },
      count,
    }

    dispatch(setCount(payload))
  }

  return (
    <tr>
      <td>
        <div className="cart-product">
          <div className="cart-product__img">
            <img src={thumb} alt="" />
          </div>
          <div className="cart-product__content">
            <h3>{productName}</h3>
            <p>#{productId}</p>
          </div>
        </div>
      </td>
      <td>{hireDate}</td>
      <td>{startTime} - {endTime}</td>
      <td>
        <div className="quantity-button">
          <button type="button" onClick={() => setProductCount(count - 1)}>-</button>
          <span>{count}</span>
          <button type="button" onClick={() => setProductCount(count + 1)}>+</button>
        </div>
      </td>
      <td>${unitPrice}</td>
      <td><i className="icon-cancel" onClick={() => removeFromCart()}></i></td>
    </tr>
  );
};

  
export default ShoppingCart