import React, { Component } from "react";

import ErrorButton from "../ErrorButton";
import ErrorComponent from "../ErrorComponent";
import Spinner from "../Spinner";
import ErrorBoundry from "../ErrorBoundry";

import "./ItemDetail.css";

class ItemDetail extends Component {
  state = {
    item: null,
    error: false,
    loading: false,
  };
  componentDidMount() {
    this.setState({ loading: true });
    this.props.getPerson(this.props.selectedItem).then((item) => {
      this.setState({ item: item, loading: false });
    });
  }
  
  static defaultProps = {
    selectedItem: 3,
  };
  render() {
    const { error, item, loading } = this.state;
    const { getMessage, getImage, children } = this.props;
    const ViewItemSec = (
      <ErrorBoundry>
        <ViewItem item={item} getImage={getImage} children={children} />
      </ErrorBoundry>
    );
    if (!item && !loading) return getMessage;
    const loadingMes = loading ? <Spinner /> : null;
    const errorMessage = error ? <ErrorComponent /> : null;
    const content = !(loading || error) && item ? ViewItemSec : null;
    if (error) {
      return <ErrorComponent />;
    }

    return (
      <div className="person-details card">
        {loadingMes}
        {errorMessage}
        {content}
      </div>
    );
  }
}

const ViewItem = (props) => {
  const { getImage, item, children } = props;
  return (
    <>
      <img
        className="person-image"
        src={getImage(props.item)}
        alt={item.name}
      />

      <div className="card-body">
        <h4>{item.name}</h4>
        <ul className="list-group list-group-flush">
          {React.Children.map(children, (child) => {
            return React.cloneElement(child, { item });
          })}
        </ul>
      </div>
      <ErrorButton />
    </>
  );
};
ItemDetail.propTypes = {
  selectedItem: (props, propName, componentName) => {
    if (typeof props | (propName === "number")) {
      return null;
    }
    return new TypeError(`${componentName} - ${propName} must be number`);
  },
};
export default ItemDetail;
