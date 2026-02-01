import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import Card from "./Card";

function Layout() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        minHeight: "200px",
        padding: "20px",
        background: theme === "light" ? "#f5f5f5" : "#222",
        color: theme === "light" ? "#000" : "#fff"
      }}
    >
      <h2>Theme Switcher</h2>

      <button onClick={toggleTheme}>
        Toggle Theme
      </button>

      <Card />
    </div>
  );
}

export default Layout;
