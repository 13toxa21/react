import React from "react";
import { connect } from "react-redux";
import { inc, dec, rnd } from "../actions";
import "./App.css";

import s from "./App.module.css";

const App = (props) => {
  return (
    <div className={s.box}>
      <div className="block">
        <span id="counter" className={s.block_text}>
          {props.counter}
        </span>
      </div>
      <div className="buttons">
        <button id="plus" className="btn btn-plus">
          <img
            className="img-fluid"
            src="./plus.svg"
            alt="plus"
            onClick={() => {
              props.inc(1);
            }}
          />
        </button>
        <button id="minus" className="btn btn-minus">
          <img
            className="img-fluid"
            src="./minus.svg"
            alt="minus"
            onClick={() => {
              props.dec(1);
            }}
          />
        </button>
        <button
          id="reset"
          className="btn btn-reset"
          onClick={() => {
            const rndNum = Math.floor(Math.random() * 10 + 1);
            props.rnd(rndNum);
            console.log(rndNum);
            
          }}
        >
          <img className="img-fluid" src="./Vector.svg" alt="Vector" />
          <img className="img-fluid" src="./Vector-1.svg" alt="Vector-1" />
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = {
  inc,
  dec,
  rnd,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
