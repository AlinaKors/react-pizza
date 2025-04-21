import { memo } from 'react';
import { Select } from '../Shared/Select';
import { TriangleToggle } from '../Shared/TriangleToggle';
import { SortSelected } from './SortSelected';

import { SortTypeBy } from '../../store/filter/types';
import styles from './Sort.module.scss';
import { sortBy } from '../../utils/constants';

type SortComponent = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isClickSort: React.RefObject<HTMLDivElement>;
  onSetSort: (item: SortTypeBy) => void;
  onToggleSort: () => void;
  sort: SortTypeBy;
  desc: boolean;
};

export const SortComponent: React.FC<SortComponent> = memo(
  ({ isClickSort, desc, onToggleSort, setIsOpen, sort, isOpen, onSetSort }) => {
    return (
      <div className={styles.sort} ref={isClickSort}>
        <TriangleToggle desc={desc} onToggleSort={onToggleSort} />
        <SortSelected setIsOpen={setIsOpen} isOpen={isOpen} sort={sort} />
        <ul className={isOpen ? '' : styles.close}>
          {sortBy.map((sortItem) => (
            <Select
              key={sortItem.name}
              selectItem={sortItem}
              onSelect={onSetSort}
              selected={sort}
            />
          ))}
        </ul>
      </div>
    );
  },
);
