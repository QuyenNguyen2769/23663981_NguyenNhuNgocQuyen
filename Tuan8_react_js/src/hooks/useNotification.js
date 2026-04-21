import { useRecoilState } from "recoil";
import { notificationState } from "../recoil/atoms/notificationAtom";

export const useNotification = () => {
  const [noti, setNoti] = useRecoilState(notificationState);

  const showNotification = (message) => {
    setNoti({ message, show: true });

    setTimeout(() => {
      setNoti({ message: "", show: false });
    }, 3000);
  };

  return { ...noti, showNotification };
};