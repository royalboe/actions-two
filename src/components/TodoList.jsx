import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const TodoList = ({ todo, dispatch }) => {
  return (
    <div className="todo-list">
      <p>{todo.input}</p>
      <input
        type="checkbox"
        onChange={() =>
          dispatch({ type: "markTodo", payload: { id: todo.id } })
        }
        checked={todo.completed}
      />
      <button
        onClick={() => dispatch({ type: "markTodo", payload: { id: todo.id } })}
      >
        {todo.completed ? "Completed" : "Not Complete"}
      </button>
      <FaTrashAlt
        role="button"
        tabIndex="0"
        onClick={() =>
          dispatch({ type: "deleteTodo", payload: { id: todo.id } })
        }
      />
    </div>
  );
};

export default TodoList;
