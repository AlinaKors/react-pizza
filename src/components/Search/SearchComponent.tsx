import { memo } from 'react';
import styles from './Search.module.scss';
import searchIcon from '../../assets/img/search.svg';
import close from '../../assets/img/close.svg';

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
        <img src={searchIcon} alt="icon search" />
        <input ref={inputRef} type="search" placeholder="Поиск..." onChange={onChange} />
        {search && (
          <img
            src={close}
            className={styles.clearInput}
            alt="clear input"
            onClick={clearSearch}
          ></img>
        )}
      </div>
    );
  },
);
