import React from 'react';

import { useEffect, useState } from 'react';
import { Pagination } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router';

import { Categories } from '../containers/Categories';
import { PizzaItem } from '../containers/PizzaItem';
import { Sort } from '../containers/Sort';
import { SkeletonBlock } from '../containers/SkeletonBlock';
import { NotFoundBlock } from '../components/NotFoundBlock';
import { initialParams } from '../utils/initialParams';
import { isEqual } from '../utils/isEqual';

import { setCurrentPage, setInitialFilter } from '../store/filter/slice';
import { fetchByPizzas } from '../store/pizza/AsyncActions';
import { RootState, useAppDispatch } from '../store/store';
import { Status } from '../store/pizza/types';

//тема для пагинации
const theme = createTheme({
  palette: {
    primary: {
      main: '#eb5a1e',
    },
  },
});

//главная страница
export const Home = () => {
  const dispatch = useAppDispatch();

  const [searchParams, setSearchParams] = useSearchParams(); //query параметры

  const { selectedCategory, desc, sort, search, currentPage } = useSelector(
    (state: RootState) => state.filter,
  ); //параметры фильтрации в стейте

  const [totalPages, setTotalPages] = useState<number>(0);

  const { items, status } = useSelector((state: RootState) => state.pizza); //пиццы в стейте

  //обращаемся к бэку и получаем пиццы + получаем количество страниц для определенной фильтрации
  const getPizzas = async () => {
    const { meta } = await dispatch(fetchByPizzas(searchParams)).unwrap();
    meta && setTotalPages(meta.total_pages);
    meta && currentPage && meta.total_pages < currentPage && dispatch(setCurrentPage(1));
  };

  //устанавливаем query параметры в соответствии со стейтом фильтрации
  const getParamsFilter = () => {
    const sortCategory = selectedCategory === 0 ? '*' : selectedCategory?.toString();
    const sortByParams = desc ? '-' + sort?.sortParams : sort?.sortParams;
    const searchInput = search ? `*${search}` : '*';
    const pageParams = currentPage && currentPage > 1 ? `${currentPage}` : '1';

    sortByParams &&
      sortCategory &&
      setSearchParams({
        category: sortCategory,
        sortBy: sortByParams,
        page: pageParams,
        title: searchInput,
      });
  };

  //устанавливаем пустые query параметры (при переходе на главную страницу или при переходе на категорию "Все")
  const emptyParams = () => {
    setSearchParams({});
  };

  //обращение к бэку при изменениях в фильтрах
  useEffect(() => {
    getPizzas();

    if (!searchParams.size) {
      dispatch(setInitialFilter(initialParams));
    }
  }, [searchParams]);

  //изменение query параметров при изменение их в стейте
  useEffect(() => {
    isEqual(initialParams, { selectedCategory, desc, sort, search, currentPage })
      ? emptyParams()
      : getParamsFilter();
  }, [selectedCategory, desc, sort, search, currentPage]);

  const pizzasBlock =
    items.length && items.map((pizzaItem) => <PizzaItem {...pizzaItem} key={pizzaItem.id} />);

  const skeletons = [...new Array(8)].map((_, index) => <SkeletonBlock key={index} />);

  return (
    <main>
      <div className="navigationMenu">
        <Categories />
        <Sort sort={sort} desc={desc} />
      </div>
      <h1>Все пиццы</h1>
      <div className={totalPages === 0 ? 'display-none' : 'pizzaWrapper'}>
        <ul>{status === Status.SUCCESS ? pizzasBlock : skeletons}</ul>
      </div>
      <ThemeProvider theme={theme}>
        {status !== Status.ERROR ? (
          <Pagination
            count={totalPages}
            variant="outlined"
            color="primary"
            onChange={(_, page) => dispatch(setCurrentPage(page))}
            page={currentPage}
          />
        ) : (
          <NotFoundBlock />
        )}
      </ThemeProvider>
    </main>
  );
};
