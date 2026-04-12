import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../features/todo/todoSlice";
import { useState } from "react";

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const [editText, setEditText] = useState(todo.text);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <li>
      {isEditing ? (
        <>
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button
            onClick={() => {
              dispatch(updateTodo({ id: todo.id, text: editText }));
              setIsEditing(false);
            }}
          >
            Lưu
          </button>
        </>
      ) : (
        <>
          {todo.text}
          <button onClick={() => setIsEditing(true)} style={{margin: "5px"}}>Sửa</button>
        </>
      )}

      <button onClick={() => dispatch(deleteTodo(todo.id))} style={{margin: "5px"}}>
        Xóa
      </button>
    </li>
  );
}