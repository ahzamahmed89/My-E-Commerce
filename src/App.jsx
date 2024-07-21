// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './Contexts/CartContext.jsx';
import Navbar from './Components/Navbar.jsx';
import HomePage from './Pages/HomePage.jsx';
import ProductPage from './Pages/ProductPage.jsx'; 
import CartPage from './Pages/CartPage.jsx';
import CheckoutPage from './Pages/CheckoutPage.jsx';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <CartProvider>
      <Router>
        <Navbar onSearch={handleSearch} />
        <Routes>
          <Route path="/" element={<HomePage searchTerm={searchTerm} />} />
          <Route path="/product/:id" element={<ProductPage />} /> {/* Fix: Use ProductPage */}
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
