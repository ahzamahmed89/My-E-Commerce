// src/pages/HomePage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductList from '../Components/ProductList';
import '../App.css';

const HomePage = ({ searchTerm }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        setProducts(response.data.products);
        setFilteredProducts(response.data.products);
        const categoryList = Array.from(new Set(response.data.products.map(product => product.category)));
        setCategories(categoryList);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filtered = products
      .filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter(product =>
        (!selectedCategory || product.category === selectedCategory) &&
        product.price >= priceRange[0] &&
        product.price <= priceRange[1]
      );
    setFilteredProducts(filtered);
  }, [searchTerm, selectedCategory, priceRange, products]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handlePriceChange = (event) => {
    const { name, value } = event.target;
    setPriceRange(prevRange => (name === 'min' ? [value, prevRange[1]] : [prevRange[0], value]));
  };

  return (
    <div>
      <h1 style={{fontsize : '20px', textAlign: 'center',marginTop : '60px', paddingTop:'0px'}}>Product List</h1>
      <div className="filters">
        <select  onChange={handleCategoryChange} value={selectedCategory}>
          <option value="">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
        <input
          type="number"
          name="min"
          placeholder="Min Price"
          onChange={handlePriceChange}
          value={priceRange[0]}
        />
        <input
          type="number"
          name="max"
          placeholder="Max Price"
          onChange={handlePriceChange}
          value={priceRange[1]}
        />
      </div>
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default HomePage;
