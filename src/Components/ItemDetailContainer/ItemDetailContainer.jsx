import React, { useState, useEffect } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail.jsx";
import mockList from "../ItemListContainer/MOCK/Mock.js";
import "./ItemDetailContainer.css";

export const ItemDetailContainer = ({ id }) => {
  const [product, setProduct] = useState({});

  const getProductService = (id) => {
    return mockList.find((item) => item.id === id);
  };

  useEffect(() => {
    //Simulo llamada al servicio.
    setTimeout(() => {
      setProduct(getProductService(id));
    }, 4000);
  });

  return (
    <div className="itemContainer">
      <h2>Item container detail</h2>
      <ItemDetail product={product} />
    </div>
  );
};
