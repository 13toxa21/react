import React from "react";

const ErrorComponent = (props) => {
  const { getLi } = props;
  return (
    <ul className="list-error">
      {getLi.map((errorLi) => {
        return <li>{errorLi}</li>;
      })}
    </ul>
  );
};

export default ErrorComponent;
