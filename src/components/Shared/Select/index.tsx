import styles from './Select.module.scss';
import { SortTypeBy } from '../../../store/filter/types';
import { memo } from 'react';

type SelectProps = {
  selectItem: SortTypeBy;
  onSelect: (item: SortTypeBy) => void;
  selected: SortTypeBy;
};

export const Select: React.FC<SelectProps> = memo(({ selectItem, onSelect, selected }) => {
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
});
