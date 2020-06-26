import React from "react";
import MainPage from "./pages/MainPage";
import CoffeePage from "./pages/CoffeePage";
import GoodsPage from "./pages/GoodsPage";
import CoffeeItemPage from "./pages/CoffeeItemPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import { Route } from "react-router-dom";
//import CoffeeService from './services/CoffeeServices';

function App(props) {
  console.log(props);
  
  return (
    <div className="App">
      <Header/>
      <Route path="/" render={() => <MainPage />} exact />
      <Route path="/our_coffee/id" render={() => <CoffeeItemPage />} />
      <Route path="/For_your_pleasure" render={() => <GoodsPage />} exact />
      <Route path="/our_cofee" render={() => <CoffeePage exact />} />
      <Footer/>
    </div>
  );
}

export default App;
