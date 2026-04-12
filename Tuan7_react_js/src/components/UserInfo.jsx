import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/authSlice";

export default function UserInfo() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  if (!user) {
    return <p>Chưa đăng nhập</p>;
  }

  return (
    <div>
      <h3>Xin chào: {user.username}</h3>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
}