import { atom } from 'recoil';

export const usersState = atom({
  key: 'usersState',
  default: {
    data: [],
    loading: false,
    error: null,
  },
});
