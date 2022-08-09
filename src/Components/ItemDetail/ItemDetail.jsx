import React from "react";
import "./itemDetail.css";

export const ItemDetail = ({ product }) => {
  console.log(product);
  return (
    <div className="itemDetail">
      <img className="img_detail" src={product.pictureUrl} alt="not found" />
      <div>
        <h4 className="desc_detail">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          veniam quibusdam eius illo, sit officiis odit? Iste suscipit est
          omnis. Ad vitae dicta ea soluta obcaecati. Voluptatem veritatis
          nostrum officia!
        </h4>
        <h1 className="price_detail"> $ {product.price}</h1>
      </div>
    </div>
  );
};
