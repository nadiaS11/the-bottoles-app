import { useEffect, useState } from "react";
import Bottle from "./Bottle";
import "./bottles.css";
import Cart from "./Cart";
import {
  addToLS,
  getStoredCart,
  removeFromLS,
} from "../utilities/localstorage";
const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cartBottle, setCartBottle] = useState([]);

  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  //load from local Storage to UI
  useEffect(() => {
    if (bottles.length > 0) {
      const storedCart = getStoredCart();
      const savedCart = [];

      for (const id of storedCart) {
        const bottle = bottles.find((bottle) => bottle.id === id);
        if (savedCart) {
          savedCart.push(bottle);
          console.log(savedCart);
          setCartBottle(savedCart);
        }
      }
    }
  }, [bottles]);

  const handleBuyNow = (bottle) => {
    const newCartBottle = [...cartBottle, bottle];
    setCartBottle(newCartBottle);
    addToLS(bottle.id);
  };

  const handleRemove = (id) => {
    //remove from UI
    const remainingCart = cartBottle.filter((bottle) => bottle.id !== id);
    setCartBottle(remainingCart);
    //remove from local Storage
    removeFromLS(id);
  };
  return (
    <div>
      <h1>Bottles:{bottles.length}</h1>
      {cartBottle.map((cart) => (
        <Cart key={cart.id} handleRemove={handleRemove} cart={cart}></Cart>
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
