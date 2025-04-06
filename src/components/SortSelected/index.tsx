import { SortTypeBy } from '@/src/store/filter/types';
import styles from './SortSelected.module.scss';

type SortSelectedProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  sort: SortTypeBy;
};

export const SortSelected: React.FC<SortSelectedProps> = ({ setIsOpen, isOpen, sort }) => {
  return (
    <div className={styles.sortBy}>
      Сортировка по: <span onClick={() => setIsOpen(!isOpen)}>{sort?.name}</span>
    </div>
  );
};
