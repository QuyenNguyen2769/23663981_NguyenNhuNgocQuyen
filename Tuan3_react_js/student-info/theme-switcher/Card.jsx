import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import Button from "./Button";

function Card() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        marginTop: "20px",
        padding: "20px",
        borderRadius: "8px",
        background: theme === "light" ? "#fff" : "#333"
      }}
    >
      <h3>Card Component</h3>
      <Button />
    </div>
  );
}

export default Card;
