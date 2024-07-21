// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../Contexts/CartContext';
import '../App.css';

const Navbar = ({ onSearch }) => {
  const { cartItems } = useCart();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  const itemCount = cartItems.length;

  return (
    <nav >
      <div className="nav-container">
        <h1 style={{marginTop: '12px',paddingTop:'-30px'}}><Link to="/">My E-Shop</Link></h1>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
        <Link to="/cart" className="cart-link" data-count={itemCount}>
          <span className="cart-icon">🛒</span>
          <span className="cart-count">{itemCount > 0 ? itemCount : '0'}</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
