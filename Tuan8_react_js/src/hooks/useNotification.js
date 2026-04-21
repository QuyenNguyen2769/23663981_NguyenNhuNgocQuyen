import { useRecoilState } from "recoil";
import { notificationState } from "../recoil/atoms/notificationAtom";

let timeoutId = null;

export const useNotification = () => {
  const [noti, setNoti] = useRecoilState(notificationState);

  const showNotification = (message) => {
    // Cập nhật state để hiển thị toast
    setNoti({ message, show: true });

    // Nếu người dùng click liên tục, xóa timeout cũ để toast không bị tắt sớm
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    // Tự động tắt sau 3 giây
    timeoutId = setTimeout(() => {
      setNoti({ message: "", show: false });
    }, 3000);
  };

  return { ...noti, showNotification };
};