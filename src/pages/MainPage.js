import React from "react";

//import "./MainPage.css";

import Home from "../components/Home";
import AboutUs from "../components/MainPage/AboutUs";
import OurBest from "../components/MainPage/OurBest";


const MainPage = () => {
  const [bestsellers, setBestsellers] = React.useState([]);

  React.useEffect(() => {
    fetch("/db.json")
      .then((resp) => resp.json())
      .then((json) => {
        setBestsellers(json.bestsellers);
      });
  }, []);

  return (
    <>
      <Home />
      <AboutUs />
      <OurBest items={bestsellers} onClick={() => console.log("gg")} />
    </>
  );
};

export default MainPage;
