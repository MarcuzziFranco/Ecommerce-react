import React from "react";
import "./Item.css";
import { NavLink } from "react-router-dom";

export const Item = ({ item }) => {
  return (
    <div className="card">
      <h3>{item.tittle}</h3>
      <img src={item.pictureUrl} alt="not found" />
      <h4>{item.description}</h4>
      <h4> $ {item.price}</h4>
      <NavLink to={`/detail/${item.id}`}>Link</NavLink>
    </div>
  );
};
