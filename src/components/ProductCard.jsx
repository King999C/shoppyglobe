import React from "react";
import "../styles/ProductCard.css";

const ProductCard = ({ product, inCart, onClick }) => {
  return (
    <div className="card">
      <img src={product.thumbnail} alt={product.title} className="image" />
      <h3 className="title">{product.title}</h3>
      <p className="description">{product.description}</p>
      <div className="details">
        <span className="price">₹ {product.price}</span>
        <span className="rating">{product.rating} ⭐</span>
      </div>
      <button className="button" onClick={onClick}>
        {inCart ? "View in cart" : "Add to cart"}
      </button>
    </div>
  );
};

export default ProductCard;
