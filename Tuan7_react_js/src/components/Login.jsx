import { useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";

export default function Login() {
  const dispatch = useDispatch();

  const handleLogin = () => {
    const fakeUser = {
      username: "Quyen",
    };
    dispatch(login(fakeUser));
  };

  return <button onClick={handleLogin}>Login</button>;
}