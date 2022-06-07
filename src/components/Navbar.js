import React from "react";
import image1 from "../images/Nav_Left.png";
import image2 from "../images/Nav_Right.png";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar_Wrapper">
      <div className="nav_con">
        <img src={image1} alt="/" />
      </div>
      <div className="nav_con">
        <img src={image2} alt="/" />
      </div>
    </div>
  );
};

export default Navbar;
