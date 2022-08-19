import React from "react";
import "./CartItem.css";

export const CartItem = () => {
  return (
    <div className="container-item">
      <div className="container-datail">
        <div className="id-item">#QUE-007544-002</div>
        <div className="container-npt">
          <div className="title-item">ITEM NAME 1</div>
          <div className="price-item">precio x unidad = 5</div>
        </div>
      </div>
      <div className="quantity-product">
        <div>Cantidad unidades</div>
        <div>5</div>
      </div>
      <div className="total">
        <div>$5</div>
      </div>
      <div className="button-cancel">
        <div>button</div>
      </div>
    </div>
  );
};
