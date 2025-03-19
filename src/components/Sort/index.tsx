import { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeSort, toggleSort } from '../../redux/slices/filterSlice';
import { sortBy } from '../../assets/initialParams';

import styles from './Sort.module.scss';
export const Sort = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isClickSort = useRef(null);

  const dispatch = useDispatch();
  const { sort, desc } = useSelector((state) => state.filter);

  const onSetSort = (item) => {
    setIsOpen(false);
    dispatch(changeSort(item));
  };

  useEffect(() => {
    const handleClickOutsideSort = (e) => {
      !e.composedPath().includes(isClickSort.current) && setIsOpen(false);
    };

    document.body.addEventListener('click', handleClickOutsideSort);

    return () => document.body.removeEventListener('click', handleClickOutsideSort);
  }, []);

  return (
    <div className={styles.sort} ref={isClickSort}>
      <div
        className={desc ? `${styles.triangle} ${styles.desc}` : styles.triangle}
        onClick={() => dispatch(toggleSort(!desc))}
      ></div>
      <div className={styles.sortBy}>
        Сортировка по: <span onClick={() => setIsOpen(!isOpen)}>{sort.name}</span>
      </div>
      <ul className={isOpen ? '' : styles.close}>
        {sortBy.map((sortItem) => (
          <li
            key={sortItem.name}
            onClick={() => onSetSort(sortItem)}
            className={sort.name === sortItem.name ? styles.isActive : ''}
          >
            {sortItem.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
