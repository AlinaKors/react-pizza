import { useContext } from 'react';
import { PizzaContext } from '../../context';

import styles from './Categories.module.scss';
export const Categories = () => {
  const { categories, selectedCategory, setSelectedCategory } = useContext(PizzaContext);

  return (
    <ul className={styles.categories}>
      {categories.map((category, index) => (
        <li
          key={category}
          className={selectedCategory == index ? styles.isActive : ''}
          onClick={() => setSelectedCategory(index)}
        >
          {category}
        </li>
      ))}
    </ul>
  );
};
