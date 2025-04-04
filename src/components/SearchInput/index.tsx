import styles from './SearchInput.module.scss';

type SearchInputProps = {
  debouncedSearch: (...args: any[]) => void;
  inputRef: React.RefObject<HTMLInputElement>;
  search: string;
  clearSearch: () => void;
};

export const SearchInput: React.FC<SearchInputProps> = ({
  debouncedSearch,
  inputRef,
  clearSearch,
  search,
}) => {
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
