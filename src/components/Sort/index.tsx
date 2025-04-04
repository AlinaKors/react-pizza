import { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { changeSort, toggleSort } from '../../store/filter/slice';
import { sortBy } from '../../utils/initialParams';

import styles from './Sort.module.scss';
import React from 'react';
import { SortTypeBy } from '@/src/store/filter/types';

export type SortProps = {
  sort?: SortTypeBy;
  desc?: boolean;
};

export const Sort: React.FC<SortProps> = React.memo(({ sort, desc }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isClickSort = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();

  const onSetSort = (item: SortTypeBy) => {
    setIsOpen(false);
    dispatch(changeSort(item));
  };

  const onToggleSort = () => {
    dispatch(toggleSort());
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
        onClick={onToggleSort}
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
