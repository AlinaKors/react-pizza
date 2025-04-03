import { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { changeSort, toggleSort } from '../../app/slices/filterSlice';
import { sortBy } from '../../assets/initialParams';

import styles from './Sort.module.scss';
import React from 'react';

type SortType = {
  name: string;
  sortParams: string;
};

type SortProps = {
  sort?: SortType;
  desc?: boolean;
};

export const Sort: React.FC<SortProps> = React.memo(({ sort, desc }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isClickSort = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();

  const onSetSort = (item: SortType) => {
    setIsOpen(false);
    dispatch(changeSort(item));
  };

  useEffect(() => {
    const handleClickOutsideSort = (e: MouseEvent) => {
      isClickSort.current && !e.composedPath().includes(isClickSort.current) && setIsOpen(false);
    };

    document.body.addEventListener('click', handleClickOutsideSort);

    return () => document.body.removeEventListener('click', handleClickOutsideSort);
  }, []);

  return (
    <div className={styles.sort} ref={isClickSort}>
      <div
        className={desc ? `${styles.triangle} ${styles.desc}` : styles.triangle}
        onClick={() => dispatch(toggleSort())}
      ></div>
      <div className={styles.sortBy}>
        Сортировка по: <span onClick={() => setIsOpen(!isOpen)}>{sort?.name}</span>
      </div>
      <ul className={isOpen ? '' : styles.close}>
        {sortBy.map((sortItem) => (
          <li
            key={sortItem.name}
            onClick={() => onSetSort(sortItem)}
            className={sort?.name === sortItem.name ? styles.isActive : ''}
          >
            {sortItem.name}
          </li>
        ))}
      </ul>
    </div>
  );
});
