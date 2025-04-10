import { memo } from 'react';
import styles from './Search.module.scss';

type SearchComponentProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputRef: React.RefObject<HTMLInputElement>;
  search: string;
  clearSearch: () => void;
};

export const SearchComponent: React.FC<SearchComponentProps> = memo(
  ({ onChange, inputRef, clearSearch, search }) => {
    return (
      <div role="search" className={styles.search}>
        <img src="src/assets/img/search.svg" alt="icon search" />
        <input ref={inputRef} type="search" placeholder="Поиск..." onChange={onChange} />
        {search && (
          <img
            src="src/assets/img/close.svg"
            className={styles.clearInput}
            alt="clear input"
            onClick={clearSearch}
          ></img>
        )}
      </div>
    );
  },
);
