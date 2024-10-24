import React from "react";
import { useDispatch, useSelector } from "react-redux";
import increment from "../../redux/actions/increment";
import decrement from "../../redux/actions/decrement";
import "./counter.styles.css";

export default () => {
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter);

  const incrementCounterHandler = () => {
    dispatch(increment());
  };

  const decrementCounterHandler = () => {
    dispatch(decrement());
  };

  return (
    <div className="header">
      <h4>Value: {counter}</h4>
      <button className="counter_btn" onClick={incrementCounterHandler}>
        +
      </button>
      <button className="counter_btn" onClick={decrementCounterHandler}>
        -
      </button>
    </div>
  );
};
