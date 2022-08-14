import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <div className="containerTittle">
        <Link to="/">
          <h2 className="Tittle">Tienda Mock</h2>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
