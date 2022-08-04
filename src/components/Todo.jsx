import React, { useReducer, useState, useEffect } from "react";
// import { FaTrashAlt } from "react-icons/fa";
// import { bindActionCreators } from "@reduxjs/toolkit";
import TodoList from "./TodoList";
import Card from "react-bootstrap/Card";

const reducer = (todos, action) => {
  switch (action.type) {
    case "addTodo": {
      return [...todos, newTodo(action.payload.input)];
    }
    case "markTodo": {
      return todos.map((todo) => {
        if (todo.id === action.payload.id)
          return { ...todo, completed: !todo.completed };
        return todo;
      });
    }
    case "deleteTodo": {
      return todos.filter((todo) => todo.id !== action.payload.id);
    }
    case "editTodo": {
      return todos.map((todo) => {
        if (todo.id === action.payload.id)
          return { ...todo, input: prompt("change the todo: ") };
        return todo;
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
    <main>
      <form onSubmit={handleSubmit} action="">
        <div className="form-row">
          <label>Add Todo:</label>
          <input
            minLength="4"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
      </form>
      <h3> My Todos</h3>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="item">
            <Card
              style={{
                display: "flex",
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Card.Body
                style={{
                  alignSelf: "center",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Card.Title>Todo</Card.Title>
                <TodoList todo={todo} dispatch={dispatch} />
              </Card.Body>
            </Card>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Todo;
