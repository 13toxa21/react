import React, { Component } from "react";
import ErrorComponent from "../ErrorComponent";

import "./ErrorBoundry.css";

class ErrorBoundry extends Component {
  state = {
    error: false,
  };

  componentDidCatch() {
    this.setState({ error: true });
  }

  render() {
    if (this.state.error) {
      return <ErrorComponent />;
    }

    return this.props.children;
  }
}

export default ErrorBoundry;
