import React from "react";
import image1 from "../images/reception.png";
import image2 from "../images/Live.png";
import image3 from "../images/Market.png";
import image4 from "../images/Speakers.png";
import "../css/MenuPage.css";

const MenuPage = () => {
  return (
    <div className="Menu_MainContainer">
      <div className="MenuWrapper">
        <div>
          <img src={image1} alt="/" />
        </div>
        <div>
          <img src={image2} alt="/" />
        </div>
        <div>
          <img src={image3} alt="/" />
        </div>
        <div>
          {" "}
          <img src={image4} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
