import React, { useReducer, useState, useEffect } from "react";
// import { bindActionCreators } from "@reduxjs/toolkit";
import TodoList from "./TodoList";

const reducer = (todos, action) => {
  switch (action.type) {
    case "addTodo": {
      return [...todos, newTodo(action.payload.input)];
    }
    case "markTodo": {
      return todos.map((todo) => {
        if (todo.id === action.payload.id)
          return { ...todo, completed: !todo.completed };
      });
    }
    default:
      return todos;
  }
};

const newTodo = (value) => {
  return { id: Date.now(), input: value, completed: false };
};

function Todo() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "addTodo", payload: { input: input } });
    // console.log(input);
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div>
      <h1>My Todo App</h1>
      <form onSubmit={handleSubmit} action="">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
      {todos.map((todo) => (
        <TodoList key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </div>
  );
}

export default Todo;
