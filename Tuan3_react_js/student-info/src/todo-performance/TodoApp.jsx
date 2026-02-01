import { useState, useCallback } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function TodoApp() {
  const [todos, setTodos] = useState(() =>
    Array.from({ length: 1000 }, (_, i) => ({
      id: i + 1,
      text: `Todo ${i + 1}`,
      done: false
    }))
  );

  const onAdd = useCallback((text) => {
    setTodos(prev => [
      ...prev,
      { id: Date.now(), text, done: false }
    ]);
  }, []);

  const onToggle = useCallback((id) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id
          ? { ...todo, done: !todo.done }
          : todo
      )
    );
  }, []);

  const onDelete = useCallback((id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }, []);

  return (
    <div>
      <h2>Todo Performance</h2>
      <TodoInput onAdd={onAdd} />
      <TodoList
        todos={todos}
        onToggle={onToggle}
        onDelete={onDelete}
      />
    </div>
  );
}

export default TodoApp;
