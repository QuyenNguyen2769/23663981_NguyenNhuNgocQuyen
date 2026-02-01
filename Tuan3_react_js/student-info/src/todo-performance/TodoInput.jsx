import { useState } from "react";

function TodoInput({ onAdd }) {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="New todo"
      />
      <button
        onClick={() => {
          onAdd(text);
          setText("");
        }}
      >
        Add
      </button>
    </div>
  );
}

export default TodoInput;
