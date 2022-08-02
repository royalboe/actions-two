import React from "react";

const TodoList = ({ todo, dispatch }) => {
  return (
    <div>
      <p>{todo.input}</p>
      <button
        onClick={() => dispatch({ type: "markTodo", payload: { id: todo.id } })}
      >
        {todo.completed ? "Completed" : "Not Complete"}
      </button>
      <button>delete</button>
    </div>
  );
};

export default TodoList;
