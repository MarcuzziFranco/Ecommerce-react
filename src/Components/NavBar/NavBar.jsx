import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="containerNavbar">
      <div className="containerImage">
        <img
          alt=""
          className="logoImage"
          src="https://cdn-icons-png.flaticon.com/512/6662/6662930.png"
        />
      </div>

      <div className="itemNavbar" href="default.asp">
        Home
      </div>
      <div className="itemNavbar" href="news.asp">
        News
      </div>
      <div className="itemNavbar" href="contact.asp">
        Contact
      </div>
      <div className="itemNavbar" href="about.asp">
        About
      </div>
    </div>
  );
}

export default NavBar;
