import React from "react";

function TodoItem({ todo, onToggle, onDelete }) {
  console.log("render item", todo.id);

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => onToggle(todo.id)}
      />
      <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
        {todo.text}
      </span>
      <button onClick={() => onDelete(todo.id)}>X</button>
    </li>
  );
}

export default React.memo(TodoItem);
