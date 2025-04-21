import { useSelector, useDispatch } from 'react-redux';

import { changeCategory } from '../../store/filter/slice';

import { memo, useCallback } from 'react';
import { selectFilter } from '../../store/filter/selectors';
import { CategoriesComponent } from './CategoriesComponent';

export const Categories = memo(() => {
  const { selectedCategory } = useSelector(selectFilter);
  const dispatch = useDispatch();

  //выбор и изменение категории
  const onChangeCategory = useCallback(
    (idx: number) => {
      dispatch(changeCategory(idx));
    },
    [dispatch],
  );

  return (
    <CategoriesComponent selectedCategory={selectedCategory} onChangeCategory={onChangeCategory} />
  );
});
