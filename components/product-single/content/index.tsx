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

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const selectedDate = new Date(hireDate);

    if (!hireDate) {
      errorMessages.push("Hire date is required!!!");
    } else if (selectedDate < today) {
      errorMessages.push("Hire date cannot be in the past!!!");
    }

    if (!startTime) {
      errorMessages.push("Start time is required!!!");
    }

    if (!endTime) {
      errorMessages.push("End time is required!!!");
    }

    if (startTime && endTime) {
      const startHour = parseInt(startTime.split(":")[0], 10);
      const endHour = parseInt(endTime.split(":")[0], 10);
      const startMinutes = parseInt(startTime.split(":")[1], 10);
      const endMinutes = parseInt(endTime.split(":")[1], 10);
      const totalStartMinutes = startHour * 60 + startMinutes;
      const totalEndMinutes = endHour * 60 + endMinutes;

      if (totalEndMinutes - totalStartMinutes < 240) { // 4 hours = 240 minutes
        errorMessages.push("End time must be at least 4 hours greater than start time!!!");
      }
    }

    setErrors(errorMessages);
    return errorMessages.length === 0;
  };

  const handleStartTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newStartTime = e.target.value;
    setStartTime(newStartTime);

    const [hour, minute] = newStartTime.split(":").map(Number);
    const endHour = (hour + 4) % 24;
    const formattedEndTime = `${endHour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
    setEndTime(formattedEndTime);
  };

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
        <h5 className="product__id">Product ID:<br />{product.productId}</h5>
        <span className="product-on-sale">Sale</span>
        <h2 className="product__name">{product.productName}</h2>

        <div className="product__prices">
          <h4>{product.unitPrice} VND</h4>
          {product.discount &&
            <span>{product.unitPrice} VND</span>
          }
        </div>
      </div>

      <div className="product-content__filters">
        <div className="product-filter-item">
          <h5>Select Hire Date:</h5>
          <input 
            type="date" 
            value={hireDate} 
            onChange={(e) => setHireDate(e.target.value)} 
            className="hire-date-input" 
          />
        </div>

        <div className="product-filter-item">
          <h5>Select Hire Time:</h5>
          <div className="hire-time-inputs">
            <input 
              type="time" 
              value={startTime} 
              onChange={handleStartTimeChange} 
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

        {errors.length > 0 && (
          <div className="error-messages">
            {errors.map((error, index) => (
              <p key={index} style={{ color: 'red' }}>{error}</p>
            ))}
          </div>
        )}

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
