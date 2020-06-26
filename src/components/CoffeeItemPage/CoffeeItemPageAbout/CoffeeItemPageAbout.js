import React from "react";

import "./CoffeeItemPageAbout.css";
import {withRouter} from "react-router-dom";

//import OurBest from "../../MainPage/OurBest";

const CoffeeItemPageAbout = () => {

  return (
    <>
      <div className="item_about">
        <div className="about_image">
          <img
            src="./images/Aromatisto.jpg"
            alt="Aromatisto"
            className="aromatisto"
          ></img>
        </div>
        <div className="text_content">
          <h3>About it</h3>
          <img src="./images/Beans_log.png" alt="logo" className="logo"></img>
          <p>Country: Brasil</p>
          <p>
            Description: Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="price">Price: 16.99</p>
        </div>
  </div>
    </>
  );
};

export default withRouter(CoffeeItemPageAbout);
