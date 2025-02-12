import styles from './Search.module.scss';
import debounce from 'lodash.debounce';
import { useRef, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setSearch } from '../../redux/slices/filterSlice';

export const Search = () => {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.filter);

  const inputRef = useRef(null);

  const clearSearch = () => {
    dispatch(setSearch(''));
    inputRef.current.focus();
    inputRef.current.value = '';
  };

  const onSearch = (e) => {
    dispatch(setSearch(e.target.value));
  };

  const debouncedSearch = useCallback(debounce(onSearch, 300), []);

  return (
    <search className={styles.search}>
      <img src="src/assets/img/search.svg" className="searchIcon" alt="icon search" />
      <input ref={inputRef} type="text" placeholder="Поиск..." onChange={debouncedSearch} />
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
