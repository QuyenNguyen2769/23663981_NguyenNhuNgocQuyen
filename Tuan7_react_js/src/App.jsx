import { useSelector } from "react-redux";
import { useEffect } from "react";

import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import ThemeToggle from "./components/ThemeToggle";
import Login from "./components/Login";
import UserInfo from "./components/UserInfo";

export default function App() {
  const theme = useSelector((state) => state.theme.mode);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Redux Demo (Counter + Theme)</h1>

      {/* Bài 1 */}
      <ComponentA />
      <ComponentB />

      <hr />

      {/* Bài 2 */}
      <ThemeToggle />

      <hr />

      {/* Bài 3 */}
      <Login />
      <UserInfo />
    </div>
  );
}