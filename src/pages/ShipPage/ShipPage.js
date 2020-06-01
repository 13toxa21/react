import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import { RenderStarshipList } from "../../SwService";
import { withRouter } from "react-router-dom";

import "./ShipPage.css";

class ShipPage extends Component {
  swapiService = new SwapiService();
  state = { selectedItem: null };
  onSelectedItem = (id) => {
    this.setState({ selectedItem: id });
  };
  render() {
    const { history } = this.props;
    return (
      <div className="row mb2">
        <div className="col-md-6">
          <RenderStarshipList
            onSelectedItem={(id) => history.push(`ship/${id}`)}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(ShipPage);
