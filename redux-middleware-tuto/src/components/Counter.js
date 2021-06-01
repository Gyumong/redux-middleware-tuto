/** @format */

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrease,
  decreaseAsync,
  increase,
  increaseAsync,
} from "../modules/counter";

const Counter = () => {
  const number = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increaseAsync());
  };

  const onDecrease = () => {
    dispatch(decreaseAsync());
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
};

export default Counter;
