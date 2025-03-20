import styles from './Search.module.scss';

import { useRef, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { debounce } from '../../assets/debounce';

import { setSearch } from '../../redux/slices/filterSlice';

export const Search = () => {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.filter);

  const inputRef = useRef<HTMLInputElement>(null);

  const clearSearch = () => {
    dispatch(setSearch(''));
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.value = '';
    }
  };

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(e.target.value));
  };

  const debouncedSearch = useCallback(debounce(onSearch, 300), [onSearch]);

  return (
    <search className={styles.search}>
      <img src="src/assets/img/search.svg" className="searchIcon" alt="icon search" />
      <input ref={inputRef} type="search" placeholder="Поиск..." onChange={debouncedSearch} />
      {search && (
        <img
          src="src/assets/img/close.svg"
          className={styles.clearInput}
          alt="clear input"
          onClick={clearSearch}
        ></img>
      )}
    </search>
  );
};
