import "./cart.css";

const Cart = ({ bottle }) => {
  console.log(bottle);
  const { name, price, img } = bottle;
  return (
    <div className="cart">
      <img src={img} alt="" />
      <h3>
        {name} <span>${price}</span> <span>quantity </span>
      </h3>
    </div>
  );
};

export default Cart;
