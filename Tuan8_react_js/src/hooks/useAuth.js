import { useRecoilState } from 'recoil';
import { authState } from '../recoil/atoms/authAtom';

export const useAuth = () => {
  const [auth, setAuth] = useRecoilState(authState);

  const login = async (username, password) => {
    setAuth({ ...auth, loading: true, error: null });

    try {
      let data;
      
      // Chế độ dành riêng cho bạn Quyen
      if (username === 'Quyen' && password === '112233') {
         // Giả lập mạng chậm 500ms
         await new Promise(resolve => setTimeout(resolve, 500));
         data = {
            accessToken: "mocked-jwt-token-for-quyen-123456",
            firstName: "Quyên",
            lastName: "Nguyễn",
            username: "Quyen"
         };
      } else {
        // Dùng API thực tế (nếu nhập 'emilys')
        const res = await fetch('https://dummyjson.com/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username,
            password,
            expiresInMins: 60,
          })
        });

        if (!res.ok) {
          throw new Error("Sai tên đăng nhập hoặc mật khẩu.");
        }
        data = await res.json();
      }
      
      // Lưu token xuống LocalStorage (Bài 9 mở rộng)
      localStorage.setItem('token', data.accessToken);

      // Cập nhật State
      setAuth({
        user: data,
        token: data.accessToken,
        loading: false,
        error: null,
      });

    } catch (error) {
      setAuth({ ...auth, loading: false, error: error.message });
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setAuth({
      user: null,
      token: null,
      loading: false,
      error: null,
    });
  };

  return {
    ...auth,
    login,
    logout,
  };
};
