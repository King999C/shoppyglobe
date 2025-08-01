import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(setProduct)
      .catch(err => setError(err.message));
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!product) return <p>Loading...</p>;

  return (
    <div className="container">
      <div className="card">
      <img src={product.thumbnail} alt={product.title} />
      <h2 className="title">{product.title}</h2>
      <p className="text">{product.description}</p>
      <p className="price">Price:₹ {product.price}</p>
    </div>
    </div>
  );
};

export default ProductDetail;
