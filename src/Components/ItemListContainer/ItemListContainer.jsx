import React, { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { FgetProducts, getProducByCategory } from "../../Services/Product.js";
import { useParams } from "react-router-dom";
import { Item } from "../Item/Item";

export const ItemListContainer = (props) => {
  //const [IsLoading, setIsLoading] = useState(true);
  const [listItem, setListItem] = useState([]);
  const { idCategory } = useParams();
  console.log(idCategory);

  const getListItemService = () => {
    FgetProducts().then((listItems) => {
      console.log(listItems);
      setListItem(listItems);
    });
  };

  const getListItemCategoryService = () => {
    getProducByCategory(idCategory).then((listItems) => {
      setListItem(listItems);
    });
  };

  useEffect(() => {
    console.log("Render listContainer");
    if (!idCategory) {
      getListItemService();
    } else {
      getListItemCategoryService();
    }
  }, [idCategory]);

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
