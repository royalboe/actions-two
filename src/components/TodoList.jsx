import React from "react";

const TodoList = ({ todo, dispatch }) => {
  return (
    <div className="todo-list">
      <p>{todo.input}</p>
      <button
        onClick={() => dispatch({ type: "markTodo", payload: { id: todo.id } })}
      >
        {todo.completed ? "Completed" : "Not Complete"}
      </button>
      <button
        onClick={() =>
          dispatch({ type: "deleteTodo", payload: { id: todo.id } })
        }
      >
        delete
      </button>
    </div>
  );
};

export default TodoList;
