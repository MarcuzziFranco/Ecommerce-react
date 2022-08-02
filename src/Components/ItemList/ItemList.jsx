import React from "react";
import { Item } from "../Item/Item";

export const ItemList = ({ listItem }) => {
  return (
    <div>
      {listItem.map((item) => (
        <div key={item.id}>
          <Item item={item} />
        </div>
      ))}
    </div>
  );
};
