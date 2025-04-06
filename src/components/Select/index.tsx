import styles from './SortSelect.module.scss';
import { SortTypeBy } from '@/src/store/filter/types';

type SelectProps = {
  selectItem: SortTypeBy;
  onSelect: (item: SortTypeBy) => void;
  selected: SortTypeBy;
};

export const Select: React.FC<SelectProps> = ({ selectItem, onSelect, selected }) => {
  return (
    <li
      key={selectItem.name}
      onClick={() => onSelect(selectItem)}
      className={
        selected.name === selectItem.name ? `${styles.select} ${styles.isActive}` : styles.select
      }
    >
      {selectItem.name}
    </li>
  );
};
