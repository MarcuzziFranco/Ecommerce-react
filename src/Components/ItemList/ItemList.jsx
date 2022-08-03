import React from "react";
import { Item } from "../Item/Item";
import "./ItemList.css";

export const ItemList = ({ listItem }) => {
  return (
    <div className="containerCards">
      {listItem.map((item) => (
        <div key={item.id}>
          <Item item={item} />
        </div>
      ))}
    </div>
  );
};
