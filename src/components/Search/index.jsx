import styles from './Search.module.scss';

import { useContext } from 'react';

import { SearchContext } from '../../context';

export const Search = () => {
  const { search, setSearch } = useContext(SearchContext);

  const clearSearch = () => {
    setSearch('');
  };

  return (
    <search className={styles.search}>
      <img src="src/assets/img/search.svg" className="searchIcon" alt="icon search" />
      <input
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
