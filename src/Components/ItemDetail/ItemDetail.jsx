import React from "react";
import "./itemDetail.css";
import { ItemCount } from "../ItemCount/ItemCount";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";

export const ItemDetail = ({ product }) => {
  const stockProduct = product.stock;
  const initialStock = 0; //valor por defecto , en el primer caso puede ser 0 , pero puede ser posible setear con un valor previo antes seleccionado.

  const [confirm, setConfirm] = useState(false);
  // const [amount, setAmount] = useState(0);

  const { addProduct } = useCartContext();

  //funcion ejecutada por ItemCount.
  const addToCardHandler = (amount) => {
    setConfirm(true);
    addProduct(product, amount);
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
          {!confirm ? (
            <ItemCount
              stock={stockProduct}
              initial={initialStock}
              onAddToCard={addToCardHandler}
            />
          ) : (
            <div className="product-price-btn">
              <NavLink to={`/cart`}>Buy</NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
