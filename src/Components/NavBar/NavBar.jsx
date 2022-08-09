import React from "react";
import "./NavBar.css";
import CardWidget from "../CartWidget/CardWidget";

function NavBar() {
  const handleClick = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="containerNavbar">
      <div className="containerTittle">
        <h2 className="Tittle">Tienda Mock</h2>
      </div>
      <CardWidget />
      <input
        type="button"
        className="itemNavbar"
        onClick={handleClick}
        value="Home"
      />
      <input
        type="button"
        className="itemNavbar"
        onClick={handleClick}
        value="Product"
      />
      <input
        type="button"
        className="itemNavbar"
        onClick={handleClick}
        value="Offers"
      />
      <input
        type="button"
        className="itemNavbar"
        onClick={handleClick}
        value="About"
      />
      <input
        type="button"
        className="itemNavbar"
        onClick={handleClick}
        value="Contact"
      />
    </div>
  );
}

export default NavBar;
