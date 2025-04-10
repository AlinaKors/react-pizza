import { memo } from 'react';
import { SortTypeBy } from '../../store/filter/types';
import styles from './Sort.module.scss';

type SortSelectedProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  sort: SortTypeBy;
};

export const SortSelected: React.FC<SortSelectedProps> = memo(({ setIsOpen, isOpen, sort }) => {
  return (
    <div className={styles.sortBy}>
      Сортировка по: <span onClick={() => setIsOpen(!isOpen)}>{sort?.name}</span>
    </div>
  );
});
