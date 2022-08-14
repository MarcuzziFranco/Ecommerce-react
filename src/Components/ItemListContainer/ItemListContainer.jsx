import React, { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { getProducts } from "../../Services/Product.js";

export const ItemListContainer = (props) => {
  console.log("Render listContainer");
  //const [IsLoading, setIsLoading] = useState(true);
  const [listItem, setListItem] = useState([]);

  const getListItemService = () => {
    getProducts().then((listItems) => {
      setListItem(listItems);
    });
  };

  useEffect(() => {
    getListItemService();
  }, []);

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
