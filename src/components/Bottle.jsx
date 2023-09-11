import "./bottle.css";
import PropTypes from "prop-types"; // ES6

const Bottle = ({ bottle, handleBuyNow }) => {
  const { name, img, price } = bottle;

  return (
    <>
      <div className="every-bottle">
        <img src={img} alt="" />
        <h3>{name}</h3>
        <p>Price: ${price}</p>
        <button onClick={() => handleBuyNow(bottle)} className="btn-buy">
          Buy now
        </button>
      </div>
    </>
  );
};
Bottle.propTypes = {
  bottle: PropTypes.object.isRequired,
  handleBuyNow: PropTypes.func.isRequired,
};
export default Bottle;
