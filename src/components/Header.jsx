import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../styles/Header.css";

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items || []);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <header>
      <nav>
        <Link to="/">Shoppy-Globe</Link>
        <Link className="home" to="/">
          Home
        </Link>
        <Link to="/cart">{totalItems} 🛒 Cart </Link>
      </nav>
    </header>
  );
};

export default Header;
