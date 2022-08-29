import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail.jsx";
import "./ItemDetailContainer.css";
import { FgetById } from "../../Services/Product.js";

export const ItemDetailContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState();
  const { id } = useParams();

  const callService = () => {
    FgetById(id).then((product) => {
      setProduct(product);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    callService();
  }, []);

  return (
    <div className="itemContainer">
      {
        <>
          {isLoading ? <h2>Cargando...</h2> : <ItemDetail product={product} />}
        </>
      }
    </div>
  );
};
