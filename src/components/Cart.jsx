import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import '../styles/style.css';

const Cart = () => {
  const cart = useSelector(state => state.cart);

  if (cart.length === 0) return <p>Your cart is empty</p>;

  return (
    <div className="cart">
      {cart.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Cart;
