import React from "react";

//import "./CoffeeItemPage.css";

import CoffeeItemPageHeader from "../components/CoffeeItemPage/CoffeeItemPageHeader";
import CoffeeItemPageAbout from "../components/CoffeeItemPage/CoffeeItemPageAbout";
//import CoffeeItemPageFooter from "../components/CoffeeItemPage/CoffeeItemPageFooter";

const CoffeeItemPage = () => {
  return (
    <>
      <CoffeeItemPageHeader />
      <CoffeeItemPageAbout />
    </>
  );
};

export default CoffeeItemPage;
