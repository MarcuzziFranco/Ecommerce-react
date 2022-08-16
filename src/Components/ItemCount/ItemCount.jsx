import React from "react";
import "./ItemCount.css";
import { useState } from "react";

export const ItemCount = ({ stock, initial, onAdd }) => {
  const zero = 0;

  const [count, setcount] = useState(initial);

  const handleIncrement = () => count < stock && setcount(count + 1);
  const handleDecrement = () => count > zero && setcount(count - 1);
  const handlerAddCart = () => onAdd(count);

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
      <button className="button" onClick={handlerAddCart}>
        Agregar al Carrito
      </button>
    </div>
  );
};
