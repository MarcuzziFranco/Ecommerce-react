import React from "react";
import "./CardWidget.css";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";

function CardWidget() {
  const { quantityproducts } = useCartContext();
  return (
    <div>
      <Link to="/cart">
        <img
          className="img-cart"
          src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png"
          alt=""
        />
      </Link>
      <span className="number-cart">{quantityproducts}</span>
    </div>
  );
}

export default CardWidget;
