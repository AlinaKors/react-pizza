import styles from './Search.module.scss';
// import debounce from 'lodash.debounce';
import { useContext, useRef } from 'react';

import { SearchContext } from '../../context';

export const Search = () => {
  const { search, setSearch } = useContext(SearchContext);

  const inputRef = useRef(null);

  const clearSearch = () => {
    setSearch('');
    inputRef.current.focus();
  };

  // const changeSearch = useCallback(
  //   debounce((e) => , 1000);
  // , []);

  return (
    <search className={styles.search}>
      <img src="src/assets/img/search.svg" className="searchIcon" alt="icon search" />
      <input
        ref={inputRef}
        type="text"
        placeholder="Поиск..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
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
