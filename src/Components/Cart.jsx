// src/components/Cart.js
import React from 'react';
import '../App.css';

const Cart = ({ cartItems, removeFromCart }) => {
  // Calculate the total price of items in the cart
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <h2>{item.title}</h2>
              <p>Price: ${item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <div className="cart-total">
            <h2>Total: ${totalPrice.toFixed(2)}</h2> {/* Display total price */}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
