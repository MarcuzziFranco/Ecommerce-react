import React, { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { getProducts, getProducByCategory } from "../../Services/Product.js";
import { useParams } from "react-router-dom";

export const ItemListContainer = (props) => {
  //const [IsLoading, setIsLoading] = useState(true);
  const [listItem, setListItem] = useState([]);
  const { idCategory } = useParams();
  console.log(idCategory);

  const getListItemService = () => {
    getProducts().then((listItems) => {
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
