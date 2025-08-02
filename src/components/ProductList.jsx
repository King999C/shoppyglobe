// //ProductList.jsx
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import useFetchProducts from "../hooks/useFetchProducts";
import ProductCard from "./ProductCard";
import { addToCart } from "../redux/cartSlice";
import { useMemo } from "react";
import "../styles/ProductList.css";

const ProductList = () => {
  useFetchProducts();
  const dispatch = useDispatch();

  const { list, status, error } = useSelector((state) => state.products);
  const cartItems = useSelector((state) => state.cart.items);

  const [search, setSearch] = useState("");

  const filtered = useMemo(
    () =>
      list.filter((p) => p.title.toLowerCase().includes(search.toLowerCase())),
    [list, search]
  );

  if (status === "loading") return <p>Product Loading...</p>;
  if (status === "failed") return <p>{error}</p>;

  return (
    <div className="product-list-wrapper">
      <input
        className="search-bar"
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="product-grid">
        {filtered.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            inCart={cartItems.some((item) => item.id === product.id)}
            onClick={() => {
              dispatch(addToCart(product));
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
