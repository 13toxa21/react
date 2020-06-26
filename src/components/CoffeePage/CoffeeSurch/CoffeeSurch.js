import React from "react";

import "./CoffeeSurch.css";

const CoffeeSurch = () => {
  return (
  <div className="coffee_surch">
    <div className="surc_panel">
      <p>Lookiing for</p>
      <input type="search" placeholder="start typing here..."></input>
    </div>
    <div className="filter_panel">
      <p>Or coffee</p>
      <div className="surc_btn">
        <a href="1">Brazil</a>
      </div>
      <div className="surc_btn">
      <a href="1">Kenya</a>
      </div>
      <div className="surc_btn">
      <a href="1">Columbia</a>
      </div>
    </div>

    </div>
  );
};

export default CoffeeSurch;
