import { memo } from 'react';
import { Category } from './Category';
import styles from './Categories.module.scss';

type CategoriesComponentProps = {
  categories: string[];
  selectedCategory: number;
  onChangeCategory: (idx: number) => void;
};

export const CategoriesComponent: React.FC<CategoriesComponentProps> = memo(
  ({ categories, selectedCategory, onChangeCategory }) => {
    return (
      <nav>
        <ul className={styles.categories}>
          {categories.map((category, idx) => (
            <Category
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
