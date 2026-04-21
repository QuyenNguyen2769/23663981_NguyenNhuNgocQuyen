import { useRecoilState } from 'recoil';
import { searchState } from '../recoil/atoms/searchAtom';
import { useEffect, useState } from 'react';

export const useSearch = () => {
  const [state, setState] = useRecoilState(searchState);
  const [inputValue, setInputValue] = useState('');

  // Update input immediately for UI responsiveness
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Debounce logic
  useEffect(() => {
    const timerId = setTimeout(async () => {
      // Khi user ngừng gõ => cập nhật term vào state
      setState((prev) => ({ ...prev, term: inputValue, loading: true }));

      if (!inputValue.trim()) {
        setState({ term: '', results: [], loading: false });
        // eslint-disable-next-line
        return;
      }

      try {
        // Dùng dummy api để search
        const res = await fetch(`https://dummyjson.com/products/search?q=${inputValue}`);
        const data = await res.json();
        setState((prev) => ({ ...prev, results: data.products, loading: false }));
      } catch (err) {
        console.error(err);
        setState((prev) => ({ ...prev, results: [], loading: false }));
      }

    }, 800); // Ngừng gõ 800ms thì mới search

    // Cleanup function để hủy timeout nếu user lại gõ tiếp
    return () => clearTimeout(timerId);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);

  return {
    inputValue,
    handleInputChange,
    results: state.results,
    loading: state.loading
  };
};
