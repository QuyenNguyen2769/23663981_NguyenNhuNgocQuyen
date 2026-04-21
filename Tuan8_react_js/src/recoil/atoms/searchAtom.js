import { atom } from 'recoil';

export const searchState = atom({
  key: 'searchState',
  default: {
    term: '',
    results: [],
    loading: false,
  },
});
