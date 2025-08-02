import { useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../redux/cartSlice";
import "../styles/CartItem.css";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img src={item.thumbnail} alt={item.title} className="image" />

      <div className="details">
        <h4 className="title">{item.title}</h4>
        <p className="price">₹ {item.price}</p>
        <div className="quantity-controls">
          <button
            className="qty-btn"
            onClick={() =>
              item.quantity > 1
                ? dispatch(decrementQuantity(item.id))
                : dispatch(removeFromCart(item.id))
            }
          >
            −
          </button>
          <span>{item.quantity}</span>
          <button
            className="qty-btn"
            onClick={() => dispatch(incrementQuantity(item.id))}
          >
            +
          </button>
        </div>

        <button
          onClick={() => dispatch(removeFromCart(item.id))}
          className="remove-btn"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
