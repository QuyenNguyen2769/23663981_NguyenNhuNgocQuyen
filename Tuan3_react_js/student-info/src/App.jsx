import { useState } from "react";
import UserForm from "./components/userForm";
import DigitalClock from "./components/DigitalClock";
import ProductFilterRaw from "./components/ProductFilterRaw";
import ProductFilterMemo from "./components/ProductFilterMemo";
import TodoApp from "./todo-performance/TodoApp";
import Stopwatch from "./stopwatch/Stopwatch";
import FetchUsers from "../fetch-users/FetchUsers";
import { ThemeContext } from "../theme-switcher/ThemeContext";
import ThemeDemo from "../theme-switcher/ThemeDemo";

function App() {
  const [show, setshow] = useState(true)
  return (
    <div>
      <UserForm />
      <button onClick={() => setshow(!show)}>Toggle Clock</button>
      {show && <DigitalClock />}
      <ProductFilterRaw />
      <hr />
      <ProductFilterMemo />
      <hr />
      <TodoApp />
      <hr />
      <Stopwatch />
      <hr />
      <FetchUsers />
      <hr />
      <ThemeDemo />
    </div>
  );
}

export default App;