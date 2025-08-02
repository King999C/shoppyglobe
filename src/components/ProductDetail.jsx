import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import "../styles/ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch product");
        return res.json();
      })
      .then(setProduct)
      .catch((err) => setError(err.message));
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!product) return <p>Loading Product Details...</p>;
  return (
    <div className="product-detail-container">
      <div className="product-detail-card">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="product-image"
        />
        <div className="product-info">
          <h2 className="product-title">{product.title}</h2>
          <p className="product-description">{product.description}</p>
          <p className="product-price">Price: ₹ {product.price}</p>
          <p className="product-rating">Rating: {product.rating} ⭐⭐</p>
          <p className="product-category">Category: {product.category}</p>
          <button
            className="product-add-button"
            onClick={() => dispatch(addToCart(product))}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;
