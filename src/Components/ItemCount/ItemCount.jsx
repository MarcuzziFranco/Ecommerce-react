import React from "react";
import "./ItemCount.css";
import { useState } from "react";

export const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setcount] = useState(initial);

  const handleIncrement = () => count < stock && setcount(count + 1);
  const handleDecrement = () => count > 0 && setcount(count - 1);

  return (
    <div className="countainer">
      <div className="container__counter">
        <input
          type="image"
          name="decrement"
          src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
          alt="text"
          onClick={handleDecrement}
        />
        <label>{count}</label>
        <input
          type="image"
          name="decrement"
          src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
          alt="text"
          onClick={handleIncrement}
        />
      </div>
      <button className="button" onClick={onAdd}>
        Agregar al Carrito
      </button>
    </div>
  );
};
