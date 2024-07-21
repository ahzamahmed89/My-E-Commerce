// src/pages/ProductPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../Contexts/CartContext';
import ProductDetail from '../Components/ProductDetail';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProductById = async (productId) => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${productId}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    if (id) {
      fetchProductById(id);
    }
  }, [id]);

  return <ProductDetail product={product} addToCart={addToCart} />;
};

export default ProductPage;
