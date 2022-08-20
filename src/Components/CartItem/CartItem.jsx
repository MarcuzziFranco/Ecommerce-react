import React from "react";
import "./CartItem.css";

export const CartItem = ({ itemCart, evRemoveItem }) => {
  let product = itemCart.product;
  const totalBuy = () => {
    return product.price * itemCart.quantity;
  };

  const removeItem = () => {
    evRemoveItem(itemCart);
  };

  return (
    <div className="container-item">
      <div className="container-datail">
        <div className="id-item">#{product.id}</div>
        <div className="container-npt">
          <div className="title-item">{product.title}</div>
          <div className="price-item">Precio X Uni ${product.price}</div>
        </div>
      </div>
      <div className="quantity-product">
        <div>Cantidad unidades</div>
        <div>{itemCart.quantity}</div>
      </div>
      <div className="total">
        <div>$ {totalBuy()}</div>
      </div>
      <div className="button-cancel">
        <button className="icon-X" onClick={removeItem}>
          X
        </button>
      </div>
    </div>
  );
};
