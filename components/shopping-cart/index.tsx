import { useSelector } from 'react-redux';
import CheckoutStatus from '../../components/checkout-status';
import Item from './item'; // this refers to item/index.tsx
import { RootState } from 'store';

const ShoppingCart = () => {
  const { cartItems } = useSelector((state: RootState) => state.cart);

  const priceTotal = () => {
    let totalPrice = 0;
    if (cartItems.length > 0) {
      cartItems.map(item => totalPrice += item.unitPrice * item.count);
    }
    return totalPrice;
  };

  return (
    <section className="cart">
      <div className="container">
        <div className="cart__intro">
          <h3 className="cart__title">Shopping Cart</h3>
          <CheckoutStatus step="cart" />
        </div>

        <div className="cart-list">
          {cartItems.length > 0 && (
            <table>
              <tbody>
                <tr>
                  <th style={{ textAlign: 'left' }}>Product</th>
                  <th>Hire Date</th>
                  <th>Hire Time</th>
                  <th>Amount</th>
                  <th>Price</th>
                  <th></th>
                </tr>

                {cartItems.map(item => (
                  <Item
                    key={item.productId}
                    productId={item.productId}
                    thumb={item.thumb}
                    productName={item.productName}
                    hireDate={item.hireDate}      // Use the new fields
                    startTime={item.startTime}
                    endTime={item.endTime}
                    unitPrice={item.unitPrice}
                    count={item.count}
                  />
                ))}
              </tbody>
            </table>
          )}

          {cartItems.length === 0 && <p>Nothing in the cart</p>}
        </div>

        <div className="cart-actions">
          <a href="/products" className="cart__btn-back">
            <i className="icon-left"></i> Continue Shopping
          </a>
          <input type="text" placeholder="Promo Code" className="cart__promo-code" />

          <div className="cart-actions__items-wrapper">
            <p className="cart-actions__total">
              Total cost <strong>${priceTotal().toFixed(2)}</strong>
            </p>
            <a href="/cart/checkout" className="btn btn--rounded btn--yellow">
              Checkout
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart;
