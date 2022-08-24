import React from "react";
import "./Cart.css";
import { useCartContext } from "../../Context/CartContext";
import { CartItem } from "../CartItem/CartItem";

export const Cart = () => {
  const {
    cartProducts,
    removeItemCart,
    quantityproducts,
    calculateTotalBuy,
    clearCart,
  } = useCartContext();

  return (
    <div className="container-cart">
      {quantityproducts > 0 ? (
        <div className="container-cards">
          {cartProducts.map((item) => {
            return <CartItem itemCart={item} evRemoveItem={removeItemCart} />;
          })}
        </div>
      ) : (
        <h2 className="message-cart">No hay productos en el carrito</h2>
      )}
      <div className="footer-cart">
        <button className="product-price-btn2" onClick={clearCart}>
          Vaciar carrito
        </button>
        <div className="resume-cart">Total carrito $ {calculateTotalBuy()}</div>
      </div>
    </div>
  );
};
