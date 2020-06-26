import React from "react";

import "../../CoffeePage/CoffeeItems/CoffeeItems.css";
import CoffeeItemBlock from "../../CoffeeItemBlock";

const GoodsItems = ({ goodsItem }) => {
  return (
    <div className="coffee_items">
      <div className="center">
      {goodsItem.map((obj) => (
        <CoffeeItemBlock key={obj.id} obj={obj} />
      ))}
      </div>
      
    </div>
  );
};

export default GoodsItems;
