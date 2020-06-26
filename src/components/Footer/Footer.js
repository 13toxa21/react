import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

const CoffeeItemPageFooter = () => {
  return (
    <div className="footer">
      <ul className="center-footer">
        <li>
          <Link to="/">
            <img src="./images/Group.jpg" alt="logo" />
            Coffee house
          </Link>
        </li>
        <li>
          <Link to="/our_cofee">Our coffee</Link>
        </li>
        <li>
          <Link to="/For_your_pleasure">For your pleasure</Link>
        </li>
      </ul>
      <div className="images-footer">
        <img src="./images/Beans_log.png" alt="logo"></img>
      </div>
    </div>
  );
};

export default CoffeeItemPageFooter;
