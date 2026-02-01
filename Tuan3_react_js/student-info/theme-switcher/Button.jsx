import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Button() {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      style={{
        padding: "10px 16px",
        background: theme === "light" ? "#1976d2" : "#90caf9",
        color: "#fff",
        border: "none",
        borderRadius: "4px"
      }}
    >
      Themed Button
    </button>
  );
}

export default Button;
