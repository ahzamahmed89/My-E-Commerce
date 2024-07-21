import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Import the consolidated CSS file

const ProductItem = ({ product, addToCart }) => {
  return (
    <div className="product-item">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.price} $</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
      <Link to={`/product/${product.id}`}>View Details</Link>
    </div>
  );
};

export default ProductItem;
