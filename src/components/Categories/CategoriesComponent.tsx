import { memo } from 'react';
import { CategoryComponent } from './CategoryComponent';
import styles from './Categories.module.scss';
import { categories } from '../../utils/constants';

type CategoriesComponentProps = {
  selectedCategory: number;
  onChangeCategory: (idx: number) => void;
};

export const CategoriesComponent: React.FC<CategoriesComponentProps> = memo(
  ({ selectedCategory, onChangeCategory }) => {
    return (
      <nav>
        <ul className={styles.categories}>
          {categories.map((category, idx) => (
            <CategoryComponent
              key={category}
              category={category}
              selectedCategory={selectedCategory}
              idx={idx}
              onChangeCategory={onChangeCategory}
            />
          ))}
        </ul>
      </nav>
    );
  },
);
