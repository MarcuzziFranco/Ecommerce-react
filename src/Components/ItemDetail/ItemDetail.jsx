import React from "react";
import "./itemDetail.css";

export const ItemDetail = ({ product }) => {
  console.log(product);
  return (
    <div className="itemDetail">
      <img className="img_detail" src={product.image} alt="not found" />
      <div>
        <h4 className="desc_detail">{product.description}</h4>
        <h1 className="price_detail"> $ {product.price}</h1>
      </div>
    </div>
  );
};
