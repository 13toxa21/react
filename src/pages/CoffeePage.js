import React from "react";

//import "./CoffeePage.css";

import OurCoffee from "../components/CoffeePage/OurCoffee/OurCoffee";
import CoffeeAbout from "../components/CoffeePage/CoffeeAbout";
import CoffeeSurch from "../components/CoffeePage/CoffeeSurch";
import CoffeeItems from "../components/CoffeePage/CoffeeItems";

const CoffeePage = () => {
  const [coffee, setBestsellers] = React.useState([]);

  React.useEffect(() => {
    fetch("/db.json")
      .then((resp) => resp.json())
      .then((json) => {
        setBestsellers(json.coffee);
      });
  }, []);

  return (
    <>
      <OurCoffee />
      <CoffeeAbout />
      <CoffeeSurch />
      <CoffeeItems cofeeItems={coffee} />
    </>
  );
};

export default CoffeePage;
