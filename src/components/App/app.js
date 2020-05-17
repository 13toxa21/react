import React from "react";

import Header from "../Header";
import InputsFields from "../InputsFields";
import ErrorComponent from "../ErrorComponent";
import Service from "../../service/service";

import "./app.css";

class App extends React.Component {
  service = new Service();

  postAnswer = (error) => {
    if (error === undefined) {
      alert("Вы зарегистрированы!");
    } else {
      this.postError(error);
    }
  };

  state = {
    postError: [],
  };

  postError = (error) => {
    const errorList = [];
    for (let key in error) {
      const arrError = error[key];
      for (let i in arrError) {
        errorList.push(`${i} ${arrError[i]}`);
        this.setState({ postError: errorList });
      }
    }
  };

  onSubmit = (obj) => {
    this.service.requestData(obj).then((res) => this.postAnswer(res));
  };
  render() {
    const getLi = this.state.postError;
    return (
      <div className="app">
        <Header />
        <ErrorComponent getLi={getLi} />
        <InputsFields onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default App;
