import { useNotification } from "../hooks/useNotification";

function Toast() {
  const { message, show } = useNotification();

  return (
    <div style={{
      position: "fixed",
      top: 20,
      right: 20,
      background: "#333",
      color: "white",
      padding: "16px 24px",
      borderRadius: "8px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      zIndex: 9999,
      display: "flex",
      alignItems: "center",
      gap: "10px",
      transition: "all 0.3s ease-in-out",
      // Hiệu ứng Toast trượt từ trên xuống và fading
      opacity: show ? 1 : 0,
      transform: show ? "translateY(0)" : "translateY(-20px)",
      pointerEvents: show ? "auto" : "none", // Không cho click khi đã bị ẩn
    }}>
      <span>🔔</span>
      {message}
    </div>
  );
}

export default Toast;