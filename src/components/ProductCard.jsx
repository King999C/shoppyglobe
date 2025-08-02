import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import "../styles/ProductCard.css";

const ProductCard = ({ product, inCart, onClick }) => {
  const dispatch = useDispatch();

  return (
    <div className="card">
      <Link to={`/product/${product.id}`} className="card-link">
        <img src={product.thumbnail} alt={product.title} className="image" />
        <h3 className="title">{product.title}</h3>
        <p className="description">{product.description}</p>
        <div className="details">
          <span className="price">{product.price} ₹ </span>
          <span className="rating">{product.rating} ⭐⭐</span>
        </div>
      </Link>
      <button className="button" onClick={() => dispatch(addToCart(product))}>
        {inCart ? "View in cart" : "Add to cart"}
      </button>
    </div>
  );
};

export default ProductCard;
