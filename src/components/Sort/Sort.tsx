import { useState, useRef, useEffect, useCallback, memo } from 'react';
import { useDispatch } from 'react-redux';

import { changeSort, toggleSort } from '../../store/filter/slice';

import { SortTypeBy } from '@/src/store/filter/types';
import { SortComponent } from './SortComponent';

export type SortProps = {
  sort: SortTypeBy;
  desc: boolean;
};

export const Sort: React.FC<SortProps> = memo(({ sort, desc }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isClickSort = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();

  //Выбор сортировки
  const onSetSort = useCallback(
    (item: SortTypeBy) => {
      setIsOpen(false);
      dispatch(changeSort(item));
    },
    [dispatch],
  );

  //Изменение по убывание/возрастанию
  const onToggleSort = useCallback(() => {
    dispatch(toggleSort());
  }, [dispatch]);

  //Закрытие попапа сортировки по клику за областью попапа
  useEffect(() => {
    const handleClickOutsideSort = (e: MouseEvent) => {
      isClickSort.current && !e.composedPath().includes(isClickSort.current) && setIsOpen(false);
    };

    document.body.addEventListener('click', handleClickOutsideSort);

    return () => document.body.removeEventListener('click', handleClickOutsideSort);
  }, []);

  return (
    <SortComponent
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      isClickSort={isClickSort}
      onSetSort={onSetSort}
      onToggleSort={onToggleSort}
      sort={sort}
      desc={desc}
    />
  );
});
