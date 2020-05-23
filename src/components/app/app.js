import React from "react";

import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import ErrorButton from "../ErrorButton";
import ErrorComponent from "../ErrorComponent";
import PeoplePage from "../../pages/PeoplePages";
import ShipPage from "../../pages/ShipPages";
import PlanetPage from "../../pages/PlanetPage";

import "./app.css";

class App extends React.Component {
  state = {
    showRandomPlanet: true,
    error: false,
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet,
      };
    });
  };

  componentDidCatch(error) {
    console.error(error);
    this.setState({ error: true });
  }

  render() {
    if (this.state.error) {
      return <ErrorComponent />;
    }
    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    return (
      <div>
        <Header />
        {planet}

        <button
          className="toggle-planet btn btn-warning btn-lg mb-4"
          onClick={this.toggleRandomPlanet}
        >
          Toggle Random Planet
        </button>
        <ErrorButton />
        <PeoplePage />
        <ShipPage />
        <PlanetPage />
      </div>
    );
  }
}

export default App;
