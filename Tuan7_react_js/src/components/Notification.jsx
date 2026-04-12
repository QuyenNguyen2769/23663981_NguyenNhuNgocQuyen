import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { hideNotification } from "../features/notification/notificationSlice";

export default function Notification() {
  const dispatch = useDispatch();
  const { message, type, show } = useSelector(
    (state) => state.notification
  );

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        dispatch(hideNotification());
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [show, dispatch]);

  if (!show) return null;

  return (
    <div className={`toast ${type}`}>
      {message}
    </div>
  );
}