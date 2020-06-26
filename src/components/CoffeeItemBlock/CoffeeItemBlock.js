import React from "react";

import "./CoffeeItemBlock.css";


const CoffeeItemBlock = ({ obj }) => {
  return (
    <div className="item1">
      <img src={obj.url} alt="img-best-coffee" />
      <p className="coffee-name">{obj.name}</p>
      <p className="coffee-country">{obj.country}</p>
      <p className="coffee-price">{obj.price}</p>
    </div>
  );
};

export default CoffeeItemBlock;
