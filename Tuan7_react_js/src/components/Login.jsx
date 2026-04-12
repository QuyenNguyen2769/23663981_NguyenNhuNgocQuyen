import { useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";
import { showNotification } from "../features/notification/notificationSlice";

export default function Login() {
  const dispatch = useDispatch();

  const handleLogin = () => {
    const fakeUser = {
      username: "Quyen",
    };
    dispatch(login(fakeUser));

    // HIỂN THỊ TOAST
    dispatch(
      showNotification({
        message: "Đăng nhập thành công!",
        type: "success",
      })
    );
  };
return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}