import { useSelector } from "react-redux";
import { useEffect } from "react";

import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import ThemeToggle from "./components/ThemeToggle";
import Login from "./components/Login";
import UserInfo from "./components/UserInfo";


import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

import ProductList from "./components/ProductList";
import Cart from "./components/Cart";


export default function App() {
  const theme = useSelector((state) => state.theme.mode);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Redux Demo (Full)</h1>

      {/* Bài 1: Counter */}
      <ComponentA />
      <ComponentB />

      <hr />

      {/* Bài 2: Theme */}
      <ThemeToggle />

      <hr />

      {/* Bài 3: Auth */}
      <Login />
      <UserInfo />

      <hr />

      {/* Bài 4: Todo */}
      <h2>Todo List</h2>
      <TodoInput/>
      <TodoList />

      <hr />
      {/* Bải 5 */}
      <h2>Shopping Cart</h2>
      <ProductList />
      <Cart />
    </div>
  );
}