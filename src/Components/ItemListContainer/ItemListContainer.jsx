import React from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import "./ItemListContainer.css";

export const ItemListContainer = (props) => {
  const handlerAdd = () => console.log("Agrego al carrito");

  return (
    <div>
      <div className="gretting">
        <h2>{props.greeting}</h2>
      </div>
      <div>
        <ItemCount stock={5} initial={1} onAdd={handlerAdd} />
      </div>
    </div>
  );
};
