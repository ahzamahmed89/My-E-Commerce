import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import '../App.css';

const CheckoutPage = () => {
  const { cartItems, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleCheckout = () => {
    if (paymentMethod) {
      clearCart();
      setShowConfirmation(true);
    }
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      {showConfirmation ? (
        <div className="confirmation-message">
          <h2>Thank you!</h2>
          <p>Your payment has been successfully received.</p>
          <p>Your order will be delivered in 5 working days.</p>
        </div>
      ) : (
        <>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div>
              {cartItems.map((item) => (
                <div className="checkout-item" key={`checkout-item-${item.id}`}>
                  <h2>{item.title}</h2>
                  <p>Price: ${item.price}</p>
                </div>
              ))}
              <div className="checkout-summary">
                <h2>Total: ${totalPrice.toFixed(2)}</h2>
                <div className="payment-methods">
                  <h3>Select Payment Method</h3>
                  <label>
                    <input
                      type="radio"
                      value="cash"
                      checked={paymentMethod === 'cash'}
                      onChange={handlePaymentMethodChange}
                    />
                    Cash
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="credit-card"
                      checked={paymentMethod === 'credit-card'}
                      onChange={handlePaymentMethodChange}
                    />
                    Credit Card
                  </label>
                </div>
                <button
                  onClick={handleCheckout}
                  disabled={!paymentMethod}
                >
                  Complete Purchase
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CheckoutPage;
