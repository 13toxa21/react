import React from "react";
import CoffeeItemBlock from "../../CoffeeItemBlock";

import "./OurBest.css";

const OurBest = ({items}) => {
  
  return (
    <div className="ourBest">
      <h2>Our best</h2>
      <div className="bestItems">
        {
          items.map((obj) => <CoffeeItemBlock key={obj.id} obj={obj} />)
        }
       
      </div>
    </div>
  );
};

export default OurBest;
