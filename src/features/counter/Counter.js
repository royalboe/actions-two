import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
  decrementByAmount,
} from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);
  return (
    <div>
      <h2>Counter</h2>
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <br></br>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <br></br>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <br></br>
      <h3>Change by amount</h3>
      <input value={amount} onChange={(e) => setAmount(e.target.value)} />
      <br></br>
      <div className="btns">
        <button onClick={() => dispatch(incrementByAmount(Number(amount)))}>
          Add
        </button>
        <button onClick={() => dispatch(decrementByAmount(Number(amount)))}>
          Subtract
        </button>
      </div>
    </div>
  );
};

export default Counter;
