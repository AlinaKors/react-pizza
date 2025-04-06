import { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { changeSort, toggleSort } from '../store/filter/slice';
import { sortBy } from '../utils/initialParams';

import React from 'react';
import { SortTypeBy } from '@/src/store/filter/types';
import { Select } from '../components/Select';
import { TriangleToggle } from '../components/TriangleToggle';
import { SortSelected } from '../components/SortSelected';

export type SortProps = {
  sort: SortTypeBy;
  desc: boolean;
};

export const Sort: React.FC<SortProps> = React.memo(({ sort, desc }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isClickSort = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();

  //Выбор сортировки
  const onSetSort = (item: SortTypeBy) => {
    setIsOpen(false);
    dispatch(changeSort(item));
  };

  //Изменение по убывание/возрастанию
  const onToggleSort = () => {
    dispatch(toggleSort());
  };

  //Закрытие попапа сортировки по клику за областью попапа
  useEffect(() => {
    const handleClickOutsideSort = (e: MouseEvent) => {
      isClickSort.current && !e.composedPath().includes(isClickSort.current) && setIsOpen(false);
    };

    document.body.addEventListener('click', handleClickOutsideSort);

    return () => document.body.removeEventListener('click', handleClickOutsideSort);
  }, []);

  return (
    <div className="sort" ref={isClickSort}>
      <TriangleToggle desc={desc} onToggleSort={onToggleSort} />
      <SortSelected setIsOpen={setIsOpen} isOpen={isOpen} sort={sort} />
      <ul className={isOpen ? '' : 'close'}>
        {sortBy.map((sortItem) => (
          <Select key={sortItem.name} selectItem={sortItem} onSelect={onSetSort} selected={sort} />
        ))}
      </ul>
    </div>
  );
});
