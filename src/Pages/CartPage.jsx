// src/pages/CartPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../Contexts/CartContext'; // Correct import
import '../App.css'; // Import the consolidated CSS file

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();

  // Calculate the total price of items in the cart
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
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
      <Link to="/checkout" className="checkout-button">Proceed to Checkout</Link>
    </div>
  );
};

export default CartPage;
