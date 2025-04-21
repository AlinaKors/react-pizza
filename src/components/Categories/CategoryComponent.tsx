import { memo } from 'react';
import styles from './Categories.module.scss';

type CategoryProps = {
  category: string;
  selectedCategory: number;
  idx: number;
  onChangeCategory: (idx: number) => void;
};

//категория
export const CategoryComponent: React.FC<CategoryProps> = memo(
  ({ category, selectedCategory, idx, onChangeCategory }) => {
    const selectCategory =
      selectedCategory == idx ? `${styles.isActive} ${styles.category}` : styles.category;

    return (
      <li className={selectCategory} onClick={() => onChangeCategory(idx)}>
        {category}
      </li>
    );
  },
);
