import React from "react";

import { Link } from "react-router-dom";

import "./Header.css";

const Home = () => {
  return (
    <div className="header">
      <ul className="head">
        <li>
          <Link to="/">
            <img className="logo" src="./images/logoHeader.png" alt="logo" />
            Coffee house
          </Link>
        </li>

        <li className="our-coffee">
          <Link to="/our_cofee">Our coffee</Link>
        </li>
          <li className="our-coffee">
          <Link to="/For_your_pleasure">For your pleasure </Link>
            </li> 
      </ul>
    </div>
  );
};

export default Home;
