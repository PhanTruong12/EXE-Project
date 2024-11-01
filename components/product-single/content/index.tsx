import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { some, toInteger } from 'lodash';
import { addProduct } from 'store/reducers/cart';
import { toggleFavProduct } from 'store/reducers/user';
import { ProductType, ProductStoreType } from 'types';
import { RootState } from 'store';

type ProductContent = {
  product: ProductType;
}

const Content = ({ product }: ProductContent) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState<number>(1);

  const [hireDate, setHireDate] = useState<string>('');
  const [startTime, setStartTime] = useState<string>('');
  const [endTime, setEndTime] = useState<string>('');

  const [errors, setErrors] = useState<string[]>([]);

  const { favProducts } = useSelector((state: RootState) => state.user);
  const isFavourite = some(favProducts, productId => productId === product.productId);

  const toggleFav = () => {
    dispatch(toggleFavProduct({ id: product.productId }));
  }

  const validateInputs = () => {
    const errorMessages: string[] = [];

    // Validate hire date is not in the past
    const today = new Date();
    const selectedDate = new Date(hireDate);

    if(selectedDate == undefined){
      errorMessages.push("Hire date is required!!!");
      setErrors(errorMessages);
      return errorMessages.length === 0;
    }

    if (selectedDate < today) {
      errorMessages.push("Hire date cannot be in the past!!!");
      setErrors(errorMessages);
      return errorMessages.length === 0;
    }

    if (startTime == null || startTime == '') {
      errorMessages.push("Start time is required!!!");
      setErrors(errorMessages);
      return errorMessages.length === 0;
    }

    if (endTime == null || endTime == '') {
      errorMessages.push("End time is required!!!");
      setErrors(errorMessages);
      return errorMessages.length === 0;
    }

    // Validate start time is before end time
    if (toInteger(startTime.split(":")[0])+4 - toInteger(endTime.split(":")[0]) > 0) {
      errorMessages.push("End time must be at least 4 hours greater than start time!!!");
      setErrors(errorMessages);
      return errorMessages.length === 0;
    }

    return errorMessages.length === 0;
  }

  const addToCart = () => {
    if (!validateInputs()) {
      return;
    }

    const productToSave: ProductStoreType = { 
      productId: product.productId,
      productName: product.productName,
      thumb: product.productImages ? product.productImages[0].imageData : './images/products/',
      unitPrice: product.currentPrice ?? product.unitPrice,
      count,
      hireDate,
      startTime,
      endTime
    };

    const productStore = {
      count,
      product: productToSave
    };

    dispatch(addProduct(productStore));
  };

  return (
    <section className="product-content">
      <div className="product-content__intro">
        <h5 className="product__id">Product ID:<br></br>{product.productId}</h5>
        <span className="product-on-sale">Sale</span>
        <h2 className="product__name">{product.productName}</h2>

        <div className="product__prices">
          <h4>{ new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
              }).format(product.unitPrice) }
              </h4>
          {product.discount &&
            <span>{ new Intl.NumberFormat('vi-VN', {
              style: 'currency',
              currency: 'VND',
            }).format(product.unitPrice) }</span>
          }
        </div>
      </div>

      <div className="product-content__filters">
        {/* Hire Date */}
        <div className="product-filter-item">
          <h5>Select Hire Date:</h5>
          <input 
            type="date" 
            value={hireDate} 
            onChange={(e) => setHireDate(e.target.value)} 
            className="hire-date-input" 
          />
        </div>

        {/* Hire Time */}
        <div className="product-filter-item">
          <h5>Select Hire Time:</h5>
          <div className="hire-time-inputs">
            <input 
              type="time" 
              value={startTime} 
              onChange={(e) => setStartTime(e.target.value)} 
              className="hire-time-input" 
              placeholder="Start Time"
            />
            <span>to</span>
            <input 
              type="time" 
              value={endTime} 
              onChange={(e) => setEndTime(e.target.value)} 
              className="hire-time-input" 
              placeholder="End Time"
            />
          </div>
        </div>

        {/* Error Display */}
        {errors.length > 0 && (
          <div className="error-messages">
            {errors.map((error, index) => (
              <p key={index} style={{ color: 'red' }}>{error}</p>
            ))}
          </div>
        )}

        {/* Quantity */}
        <div className="product-filter-item">
          <h5>Quantity:</h5>
          <div className="quantity-buttons">
            <div className="quantity-button">
              <button type="button" onClick={() => setCount(count - 1)} className="quantity-button__btn">
                -
              </button>
              <span>{count}</span>
              <button type="button" onClick={() => setCount(count + 1)} className="quantity-button__btn">
                +
              </button>
            </div>
            
            <button type="submit" onClick={() => addToCart()} className="btn btn--rounded btn--yellow">Add to cart</button>
            <button type="button" onClick={toggleFav} className={`btn-heart ${isFavourite ? 'btn-heart--active' : ''}`}>
              <i className="icon-heart"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
