import { useSelector, useDispatch } from 'react-redux';

import { changeCategory } from '../store/filter/slice';

import { RootState } from '../store/store';
import React from 'react';
import { Category } from '../components/Category';

export const Categories = React.memo(() => {
  const categories = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые'];

  const selectedCategory = useSelector((state: RootState) => state.filter.selectedCategory);
  const dispatch = useDispatch();

  //выбор и изменение категории
  const onChangeCategory = (idx: number) => {
    dispatch(changeCategory(idx));
  };

  return (
    <nav>
      <ul className="categories">
        {categories.map((category, idx) => (
          <Category
            key={category}
            category={category}
            selectedCategory={selectedCategory}
            idx={idx}
            onChangeCategory={onChangeCategory}
          />
        ))}
      </ul>
    </nav>
  );
});
