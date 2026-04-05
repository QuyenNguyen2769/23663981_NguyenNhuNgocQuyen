import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/dashboard/profile"); // chuyển sau login
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Đăng nhập</button>
    </div>
  );
}