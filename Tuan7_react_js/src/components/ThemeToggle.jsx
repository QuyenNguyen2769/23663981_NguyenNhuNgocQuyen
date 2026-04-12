import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/theme/ThemeSlice";

export default function ThemeToggle() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);

  return (
    <button onClick={() => dispatch(toggleTheme())}>
      Đổi theme ({theme})
    </button>
  );
}