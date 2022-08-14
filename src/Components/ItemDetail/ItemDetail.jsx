import React from "react";
import "./itemDetail.css";

export const ItemDetail = ({ product }) => {
  console.log(product);
  return (
    <div className="itemDetail">
      <div className="img-container">
        <img className="img-detail" src={product.image} alt="not found" />
      </div>
      <div className="description-container">
        <h1 className="title-detail">{product.title}</h1>
        <h4 className="description-detail">{product.description}</h4>
        <h1 className="price-detail"> $ {product.price}</h1>
      </div>
    </div>
  );
};
