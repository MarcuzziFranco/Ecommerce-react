import React, { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import "./ItemListContainer.css";
import {
  FgetProducts,
  FgetProductsByCategory,
} from "../../Services/Product.js";
import { useParams } from "react-router-dom";
import { Item } from "../Item/Item";

export const ItemListContainer = (props) => {
  //const [IsLoading, setIsLoading] = useState(true);
  const [listItem, setListItem] = useState([]);
  const { idCategory } = useParams();

  const getListItemService = () => {
    FgetProducts().then((listItems) => {
      setListItem(listItems);
    });
  };

  const getListItemCategoryService = () => {
    FgetProductsByCategory(idCategory).then((listItems) => {
      setListItem(listItems);
    });
  };

  useEffect(() => {
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
