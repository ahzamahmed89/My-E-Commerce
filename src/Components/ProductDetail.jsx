import React from 'react';
import '../App.css'; // Import the consolidated CSS file

const ProductDetail = ({ product, addToCart }) => {
  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-detail">
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button className="add-to-cart" onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
