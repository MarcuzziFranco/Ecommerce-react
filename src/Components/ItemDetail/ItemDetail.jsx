import React from "react";
import "./itemDetail.css";
import { ItemCount } from "../ItemCount/ItemCount";
import { useState } from "react";

export const ItemDetail = ({ product }) => {
  const stockProduct = 5; //puede setearse desde product si el stock viene como parte del objecto o setearse con otra llamada a la api.
  const initialStock = 0; //valor por defecto , en el primer caso puede ser 0 , pero puede ser posible setear con un valor previo antes seleccionado.

  //funcion ejecutada por ItemCount.
  const addToCardHandler = (amount) => {
    console.log(amount);
  };

  return (
    <div className="itemDetail">
      <div className="img-container">
        <img className="img-detail" src={product.image} alt="not found" />
      </div>
      <div className="description-container">
        <h1 className="title-detail">{product.title}</h1>
        <h4 className="description-detail">{product.description}</h4>
        <h1 className="price-detail"> $ {product.price}</h1>
        <div>
          <ItemCount
            stock={stockProduct}
            initial={initialStock}
            onAdd={addToCardHandler}
          />
        </div>
      </div>
    </div>
  );
};
