import React from 'react';
import ProductItem from './ProductItem';
import { useCart } from '../Contexts/CartContext';
import '../App.css'; // Import the consolidated CSS file

const ProductList = ({ products }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-list">
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        products.map(product => (
          <ProductItem key={product.id} product={product} addToCart={addToCart} />
        ))
      )}
    </div>
  );
};

export default ProductList;
