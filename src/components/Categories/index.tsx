import { useSelector, useDispatch } from 'react-redux';

import { changeCategory } from '../../app/slices/filterSlice';

import styles from './Categories.module.scss';
import { RootState } from '../../app/store';
import React from 'react';

export const Categories = React.memo(() => {
  const categories = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые'];

  const selectedCategory = useSelector((state: RootState) => state.filter.selectedCategory);
  const dispatch = useDispatch();

  return (
    <nav>
      <ul className={styles.categories}>
        {categories.map((category, index) => (
          <li
            key={category}
            className={selectedCategory == index ? styles.isActive : ''}
            onClick={() => dispatch(changeCategory(index))}
          >
            {category}
          </li>
        ))}
      </ul>
    </nav>
  );
});
