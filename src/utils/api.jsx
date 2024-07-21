// src/utils/api.js
import axios from 'axios';

export const fetchProducts = async () => {
  const response = await axios.get('https://dummyjson.com/products');
  return response.data.products;
};

export const fetchProductById = async (id) => {
  const response = await axios.get(`https://dummyjson.com/products/${id}`);
  return response.data;
};
