import React, { useReducer } from "react";

const CounterUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function reducer(state, action) {
    switch (action) {
      case "increment": {
        return { count: state.count + 1 };
      }
      case "decrement": {
        return { count: state.count - 1 };
      }
      case "reset": {
        return { count: 0 };
      }
      default:
        return state;
    }
  }

  return (
    <div>
      <h2>Using useReducer</h2>
      <button onClick={() => dispatch("increment")}>+</button>
      <p>{state.count}</p>
      <button onClick={() => dispatch("decrement")}>-</button>
      <br></br>
      <button onClick={() => dispatch("reset")}>reset</button>
    </div>
  );
};

export default CounterUseReducer;
