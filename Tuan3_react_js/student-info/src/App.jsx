import UserForm from "./components/userForm";
import DigitalClock from "./components/DigitalClock";
import { useState } from "react";

function App() {
  const [show, setshow] = useState(true)
  return (
    <div>
      <UserForm />
      <button onClick={() => setshow(!show)}>Toggle Clock</button>
      {show && <DigitalClock />}
    </div>
  );
}

export default App;