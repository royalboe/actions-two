import React, { useState, useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";

const TodoList = ({ todo, dispatch }) => {
  const [isEditable, setIsEditable] = useState(false);
  let styles = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  };

  function handleEdit() {
    setIsEditable(true);
  }

  useEffect(() => {
    let newValue;
    if (isEditable) newValue = prompt("What is your new input");
    if (newValue) {
      dispatch({ type: "editTodo", payload: { id: todo.id, input: newValue } });
      
    }
    if (isEditable) setIsEditable(false); // reset editable
  }, [isEditable]);

  return (
    <div className="todo-list" style={styles}>
      <div className="start">
        <input
          type="checkbox"
          onChange={() =>
            dispatch({ type: "markTodo", payload: { id: todo.id } })
          }
          checked={todo.completed}
        />
        <p>{todo.input}</p>
      </div>
      <div className="end">
        <button
          onClick={() =>
            dispatch({ type: "markTodo", payload: { id: todo.id } })
          }
        >
          {todo.completed ? "Completed" : "Not Complete"}
        </button>
        <FaRegEdit role="button" tabIndex="0" onClick={handleEdit} />
        <FaTrashAlt
          role="button"
          tabIndex="0"
          onClick={() =>
            dispatch({ type: "deleteTodo", payload: { id: todo.id } })
          }
        />
      </div>
    </div>
  );
};

export default TodoList;
