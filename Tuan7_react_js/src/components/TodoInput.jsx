import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

// ví dụ gọi Toast từ compoment này
import { showNotification } from "../features/notification/notificationSlice";

export default function TodoInput() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
  if (!text.trim()) return;

  dispatch(addTodo(text));

  // HIỂN THỊ TOAST Ở ĐÂY
  dispatch(
    showNotification({
      message: "Đã thêm todo!",
      type: "success",
    })
  );

  setText("");
};

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nhập todo..."
      />
      <button onClick={handleAdd} style={{marginLeft:"10px"}}>Thêm</button>
    </div>
  );
}