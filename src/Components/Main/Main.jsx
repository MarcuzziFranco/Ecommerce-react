import React from "react";
import "./Main.css";
import { Routes, Route } from "react-router-dom";
import { ItemDetailContainer } from "../ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "../ItemListContainer/ItemListContainer";

export const Main = () => {
  return (
    <div className="main">
      {
        <Routes>
          <Route
            exact
            path="/home"
            element={<ItemListContainer greeting="Bienvenido a mi tienda" />}
          />
          <Route
            exact
            path="/tecnology/:idCategory"
            element={<ItemListContainer greeting="Bienvenido a mi tienda" />}
          />
          <Route
            exact
            path="/costume/:idCategory"
            element={<ItemListContainer greeting="Bienvenido a mi tienda" />}
          />
          <Route
            exact
            path="/jewelerys/:idCategory"
            element={<ItemListContainer greeting="Bienvenido a mi tienda" />}
          />
          <Route exact path="/detail/:id" element={<ItemDetailContainer />} />
        </Routes>
      }
    </div>
  );
};
