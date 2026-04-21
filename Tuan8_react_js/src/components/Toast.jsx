import { useNotification } from "../hooks/useNotification";

function Toast() {
  const { message, show } = useNotification();

  if (!show) return null;

  return (
    <div style={{
      position: "fixed",
      top: 20,
      right: 20,
      background: "black",
      color: "white",
      padding: "10px 20px",
      borderRadius: 5
    }}>
      {message}
    </div>
  );
}

export default Toast;