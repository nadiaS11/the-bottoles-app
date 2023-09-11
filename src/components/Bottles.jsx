import { useEffect, useState } from "react";
import Bottle from "./Bottle";
import "./bottles.css";
import Cart from "./Cart";
const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cartBottle, setCartBottle] = useState([]);
  const handleBuyNow = (bottle) => {
    const newCartBottle = [...cartBottle, bottle];
    setCartBottle(newCartBottle);
  };

  useEffect(() => {
    fetch("bottoles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  return (
    <div>
      <h1>Bottles:{bottles.length}</h1>
      {cartBottle.map((bottle) => (
        <Cart
          key={bottle.id}
          handleBuyNow={handleBuyNow}
          bottle={bottle}
        ></Cart>
      ))}
      <div className="bottles-container">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            handleBuyNow={handleBuyNow}
            bottle={bottle}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
