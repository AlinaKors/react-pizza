import styles from './Category.module.scss';

type CategoryProps = {
  category: string;
  selectedCategory: number;
  idx: number;
  onChangeCategory: (idx: number) => void;
};

//категории
export const Category: React.FC<CategoryProps> = ({
  category,
  selectedCategory,
  idx,
  onChangeCategory,
}) => {
  return (
    <li
      className={
        selectedCategory == idx ? `${styles.isActive} ${styles.category}` : styles.category
      }
      onClick={() => onChangeCategory(idx)}
    >
      {category}
    </li>
  );
};
