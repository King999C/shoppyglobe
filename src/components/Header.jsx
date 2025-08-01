import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../styles/Header.css';

const Header = () => {
  const cart = useSelector(state => state.cart);

  return (
    <header>
      <nav>
        <Link to="/">ShoppyGlobe</Link>
        <Link className='home' to="/">Home</Link>
        <Link to="/cart">Cart ({cart.length})</Link>
        <button className='btn_header'>Login</button>
        <button className='btn_header'>Create</button>
      </nav>
    </header>
  );
};

export default Header;
