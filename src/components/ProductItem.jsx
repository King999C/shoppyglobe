// ProductItem.jsx
import React from 'react';
import '../styles/ProductItem.css';

const ProductItem = ({ product }) => {
  return (
    <div className="card">
      <img src={product.thumbnail} alt={product.title} className="image" />
      <h2 className="title">{product.title}</h2>
      <p className="description">{product.description}</p>
      <div className="details">
        <span className="price">${product.price}</span>
        <span className="rating">⭐ {product.rating}</span>
      </div>
      <button className="button">Add to Cart</button>
    </div>
  );
};

export default ProductItem;
