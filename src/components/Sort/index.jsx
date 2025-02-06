import { useState, useContext } from 'react';

import { PizzaContext } from '../../context';

import styles from './Sort.module.scss';

export const Sort = () => {
  const { desc, sort, setSort, setDesc, sortBy } = useContext(PizzaContext);

  const [isOpen, setIsOpen] = useState(false);

  const onSetSort = (item) => {
    setIsOpen(false);
    setSort(item);
  };

  return (
    <div className={styles.sort}>
      <div
        className={desc ? `${styles.triangle} ${styles.desc}` : styles.triangle}
        onClick={() => setDesc(!desc)}
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
