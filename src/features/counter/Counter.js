import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Counter</h2>
      <p>{count}</p>
      <buttton onClick={() => dispatch(increment())}>+</buttton>
      <buttton onClick={() => dispatch(decrement())}>-</buttton>
    </div>
  );
};

export default Counter;
