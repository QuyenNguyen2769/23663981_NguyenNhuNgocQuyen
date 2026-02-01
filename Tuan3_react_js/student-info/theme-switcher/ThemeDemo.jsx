import { ThemeProvider } from "./ThemeContext";
import Layout from "./Layout";

function ThemeDemo() {
  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  );
}

export default ThemeDemo;
