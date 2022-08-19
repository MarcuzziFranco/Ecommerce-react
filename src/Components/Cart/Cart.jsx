import React from "react";
import "./Cart.css";
import { useCartContext } from "../../Context/CartContext";
import { CartItem } from "../CartItem/CartItem";

export const Cart = () => {
  const { cartProducts } = useCartContext();

  return (
    <div className="container-cards">
      {/* <table>
        <tr>
          <th> Nombre</th>
          <th> Precio</th>
          <th> Cantidad</th>
        </tr>
        {cartProducts.map((item) => {
          return (
            <tr>
              <td>{item.product.title}</td>
              <td>{item.product.price}</td>
              <td>{item.quantity}</td>
            </tr>
          );
        })}
      </table> */}
      <CartItem />
      <CartItem />
    </div>
  );
};
