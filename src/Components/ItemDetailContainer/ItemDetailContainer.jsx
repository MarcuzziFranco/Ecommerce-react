import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail.jsx";
import mockList from "../ItemListContainer/MOCK/Mock.js";
import "./ItemDetailContainer.css";

export const ItemDetailContainer = () => {
  console.log("Init component");
  //const [product, setProduct] = useState();
  //const { id } = useParams();

  const getProductService = (id) => {
    return mockList.find((item) => item.id === id);
  };

  /*useEffect(() => {
    //Simulo llamada al servicio.
    console.log("call useEffect");
    setTimeout(() => {
      setProduct(getProductService(id));
    }, 4000);
  }, [id]);*/

  //console.log(product);

  return (
    <div className="itemContainer">
      <h2>Item container detail</h2>
      {/* <>{product ? <h2>Cargando...</h2> : <ItemDetail product={product} />}</> */}
      {/* {product ? console.log(product) : console.log(product)} */}
    </div>
  );
};
