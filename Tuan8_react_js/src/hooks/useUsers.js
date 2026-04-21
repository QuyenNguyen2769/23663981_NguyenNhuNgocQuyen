import { useRecoilState } from 'recoil';
import { usersState } from '../recoil/atoms/usersAtom';
import { useEffect } from 'react';

export const useUsers = () => {
  const [state, setState] = useRecoilState(usersState);

  const fetchUsers = async () => {
    // Nếu có data rồi thì không fetch lại, hoặc tùy yêu cầu
    if (state.data.length > 0) return;

    setState({ ...state, loading: true });
    
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error('Lỗi khi tải dữ liệu từ server!');
      }
      const data = await response.json();
      setState({ data, loading: false, error: null });
    } catch (error) {
      setState({ data: [], loading: false, error: error.message });
    }
  };

  // Mình có thể để cho component tự gọi hàm fetch, hoặc tự động fetch khi hook được sử dụng.
  // Thường với bài tập kiểu này, gọi fetch trực tiếp ở trong useEffect là hợp lý nhất.
  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return state;
};
