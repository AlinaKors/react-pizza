import { useSelector, useDispatch } from 'react-redux';

import { changeCategory } from '../../redux/slices/filterSlice';

import styles from './Categories.module.scss';
export const Categories = () => {
  const categories: string[] = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые'];

  const selectedCategory = useSelector((state) => state.filter.selectedCategory);
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
};
