import React from "react";

export const Item = ({ item }) => {
  return (
    <div>
      <h3>{item.tittle}</h3>
      <img src={item.pictureUrl} />
      <h4>{item.description}</h4>
      <h4> $ {item.price}</h4>
    </div>
  );
};
