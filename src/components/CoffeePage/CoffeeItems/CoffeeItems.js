import React from "react";

//import "./CoffeeItems.css";
import CoffeeItemBlock from "../../CoffeeItemBlock";

const CoffeeItems = ({cofeeItems}) => {
  
  return (
      <div className="coffee_items">
        <div className="center">
        {
          cofeeItems.map((obj) => <CoffeeItemBlock key={obj.id} obj={obj} />)
        }
        </div>
      </div>
  );
};

export default CoffeeItems;
