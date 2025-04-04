import { useRef, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { debounce } from '../utils/debounce';

import { setSearch } from '../store/filter/slice';
import { RootState } from '../store/store';
import { SearchInput } from '../components/SearchInput';

export const Search = () => {
  const dispatch = useDispatch();
  const search = useSelector((state: RootState) => state.filter.search);

  const inputRef = useRef<HTMLInputElement>(null);

  //полная очистка строки поиска
  const clearSearch = () => {
    dispatch(setSearch(''));
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.value = '';
    }
  };

  //поиск продукта
  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(e.target.value));
  };

  //отложенный поиск продукта
  const debouncedSearch = useCallback(debounce(onSearch, 300), [onSearch]);

  return (
    <SearchInput
      debouncedSearch={debouncedSearch}
      inputRef={inputRef}
      clearSearch={clearSearch}
      search={search}
    />
  );
};
