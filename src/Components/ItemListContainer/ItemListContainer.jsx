import React, { useEffect, useState } from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import { ItemList } from "../ItemList/ItemList";
import "./ItemListContainer.css";
import mockList from "./MOCK/Mock.js";

export const ItemListContainer = (props) => {
  const handlerAdd = () => console.log("Agrego al carrito");

  const [listItem, setListItem] = useState([]);

  const getListItemService = () => {
    return mockList;
  };

  useEffect(() => {
    //Simulo llamada al servicio.
    setTimeout(() => {
      setListItem(getListItemService());
    }, 4000);
  }, [listItem]);

  return (
    <div>
      <div className="gretting">
        <h2>{props.greeting}</h2>
      </div>
      {/* <div>
        <ItemCount stock={5} initial={1} onAdd={handlerAdd} />
      </div> */}
      <div>
        <ItemList listItem={listItem} />
      </div>
    </div>
  );
};
