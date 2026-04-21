import { atom } from 'recoil';

export const authState = atom({
  key: 'authState',
  default: {
    user: null,
    token: localStorage.getItem('token') || null, // Lưu token từ LocalStorage theo Bài 9
    loading: false,
    error: null,
  },
});
