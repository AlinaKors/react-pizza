import { useSelector, useDispatch } from 'react-redux';

import { changeCategory } from '../../store/filter/slice';

import { memo, useMemo } from 'react';
import { selectFilter } from '../../store/filter/selectors';
import { CategoriesComponent } from './CategoriesComponent';

export const Categories = memo(() => {
  const categories = useMemo(() => ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые'], []);

  const { selectedCategory } = useSelector(selectFilter);
  const dispatch = useDispatch();

  //выбор и изменение категории
  const onChangeCategory = (idx: number) => {
    dispatch(changeCategory(idx));
  };

  return (
    <CategoriesComponent
      categories={categories}
      selectedCategory={selectedCategory}
      onChangeCategory={onChangeCategory}
    />
  );
});
