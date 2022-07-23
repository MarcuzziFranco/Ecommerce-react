import React from "react";
import "./ItemListContainer.css";

export const ItemListContainer = (props) => {
  return (
    <div className="gretting">
      <h2>{props.greeting}</h2>
    </div>
  );
};
