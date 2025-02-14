import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeSort, toggleSort } from '../../redux/slices/filterSlice';
import { sortBy } from '../../assets/initialParams';

import styles from './Sort.module.scss';
export const Sort = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const desc = useSelector((state) => state.filter.desc);
  const sort = useSelector((state) => state.filter.sort);

  const onSetSort = (item) => {
    setIsOpen(false);
    dispatch(changeSort(item));
  };

  return (
    <div className={styles.sort}>
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
