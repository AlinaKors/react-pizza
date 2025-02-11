import { useSelector, useDispatch } from 'react-redux';

import { changeCategory } from '../../redux/slices/filterSlice';

import styles from './Categories.module.scss';
export const Categories = () => {
  const categories = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые'];

  const selectedCategory = useSelector((state) => state.filter.category);
  const dispatch = useDispatch();

  return (
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
  );
};
