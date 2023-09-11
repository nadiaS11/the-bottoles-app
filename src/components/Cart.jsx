import "./cart.css";
import PropTypes from "prop-types";

const Cart = ({ cart, handleRemove }) => {
  console.log(cart);
  const { name, price, img, id } = cart;
  return (
    <div className="cart">
      <img src={img} alt="" />
      <h3>
        {name} <span>${price}</span>{" "}
        <span>
          <button onClick={() => handleRemove(id)} className="btn-cart">
            Remove
          </button>
        </span>
      </h3>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.object.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default Cart;
