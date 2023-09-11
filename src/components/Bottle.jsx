import "./bottle.css";

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

export default Bottle;
