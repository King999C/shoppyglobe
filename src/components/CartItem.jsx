import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/cartSlice';
import '../styles/CartItem.css';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <h4 className="title">{item.title}</h4>
      <p className="text">Qty: {item.quantity}</p>
      <button onClick={() => dispatch(removeFromCart(item.id))} className="btn">Remove</button>
    </div>
  );
};

export default CartItem;
