import { useRef, useMemo, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { debounce } from '../../utils/debounce';

import { setSearch } from '../../store/filter/slice';
import { SearchComponent } from './SearchComponent';

import { selectFilterSearch } from '../../store/filter/selectors';

export const Search = () => {
  const dispatch = useDispatch();
  const search = useSelector(selectFilterSearch);

  const inputRef = useRef<HTMLInputElement>(null);

  //полная очистка строки поиска
  const clearSearch = useCallback(() => {
    dispatch(setSearch(''));
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.value = '';
    }
  }, [dispatch]);

  //отложенный поиск продукта
  const handleChange = useMemo(
    () =>
      debounce((e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearch(e.target.value));
      }, 300),
    [dispatch],
  );

  return (
    <SearchComponent
      onChange={handleChange}
      inputRef={inputRef}
      clearSearch={clearSearch}
      search={search}
    />
  );
};
