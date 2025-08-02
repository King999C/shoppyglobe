import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import "../styles/Cart.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <div className="cart-total">
        <h3>Total Amount:</h3>
        <p className="total-price">₹{totalPrice.toFixed(2)}</p>
      </div>
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="cart-empty">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className="cart-total">
            <h3>Total Amount:</h3>
            <p className="total-price">₹{totalPrice.toFixed(2)}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
