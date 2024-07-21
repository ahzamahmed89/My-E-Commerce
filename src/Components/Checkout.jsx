import React from 'react';
import { useCart } from '../Contexts/CartContext';
import '../App.css';

const CheckoutPage = () => {
  const { cartItems, clearCart } = useCart();

  const handleCheckout = () => {
    // Implement checkout logic here
    clearCart();
    alert('Checkout successful!');
  };

  return (
    <div>
      <h1>Checkout</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id}>
              <h2>{item.title}</h2>
              <p>Price: ${item.price}</p>
            </div>
          ))}
          <button onClick={handleCheckout}>Complete Purchase</button>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
