import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

export const Item = ({ item }) => {
  return (
    <div className="wrapper">
      <div className="wrapper-img">
        <img src={item.image} alt="not found" />
      </div>
      <div className="product-info">
        <div className="product-text">
          <h3>{item.title}</h3>
        </div>

        <div className="product-price-btn">
          <span>$ {item.price}</span>

          <Link to={`/detail/${item.id}`}>Buy</Link>
        </div>
      </div>
    </div>
  );
};
