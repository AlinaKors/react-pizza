import React, { useCallback, useRef } from 'react';

import { useEffect, useState } from 'react';
import { Pagination } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router';

import { PizzaItem } from '../components/PizzaItem';
import { Sort } from '../components/Sort';
import { SkeletonBlock } from '../components/Shared/SkeletonBlock';
import { NotFoundBlock } from '../components/NotFoundBlock';
import { initialParams } from '../utils/initialParams';
import { isEqual } from '../utils/isEqual';

import { setCurrentPage, setInitialFilter } from '../store/filter/slice';
import { fetchByPizzas } from '../store/pizza/AsyncActions';
import { useAppDispatch } from '../store/store';
import { Status } from '../store/pizza/types';
import { Categories } from '../components/Categories';
import { selectFilter } from '../store/filter/selectors';
import { selectPizza } from '../store/pizza/selectors';

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

  const [searchParams, setSearchParams] = useSearchParams();
  const [totalPages, setTotalPages] = useState(0);
  const previousParamsRef = useRef<string>();

  const { selectedCategory, desc, sort, search, currentPage } = useSelector(selectFilter);
  const { items, status } = useSelector(selectPizza);

  //обращаемся к бэку и получаем пиццы + получаем количество страниц для определенной фильтрации
  const getPizzas = useCallback(
    async (params: URLSearchParams | string) => {
      const { meta } = await dispatch(fetchByPizzas(params)).unwrap();
      meta && setTotalPages(meta.total_pages);
      meta && currentPage && meta.total_pages < currentPage && dispatch(setCurrentPage(1));
    },
    [dispatch, currentPage],
  );
  //устанавливаем query параметры в соответствии со стейтом фильтрации
  const getParamsFilter = useCallback(() => {
    const sortCategory = selectedCategory === 0 ? '*' : selectedCategory?.toString();
    const sortByParams = desc ? `-${sort?.sortParams}` : sort?.sortParams;
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
  }, [currentPage, desc, search, selectedCategory, setSearchParams, sort?.sortParams]);

  //устанавливаем пустые query параметры (при переходе на главную страницу или при переходе на категорию "Все")
  const emptyParams = useCallback(() => {
    setSearchParams({});
  }, [setSearchParams]);

  //обращение к бэку при изменениях в фильтрах
  useEffect(() => {
    const currentParams = searchParams.toString();

    if (previousParamsRef.current !== currentParams) {
      previousParamsRef.current = currentParams;

      const defaultParams = 'category=*&sortBy=rating&page=1&title=*';
      if (!searchParams.size) {
        getPizzas(defaultParams);
        dispatch(setInitialFilter(initialParams));
      } else {
        getPizzas(searchParams);
      }
    }
  }, [searchParams, dispatch, getPizzas]);

  //изменение query параметров при изменение их в стейте
  useEffect(() => {
    isEqual(initialParams, { selectedCategory, desc, sort, search, currentPage })
      ? emptyParams()
      : getParamsFilter();
  }, [selectedCategory, desc, sort, search, currentPage, emptyParams, getParamsFilter]);

  const renderPizzas = () => {
    if (status === Status.LOADING) {
      return [...new Array(4)].map((_, i) => <SkeletonBlock key={i} />);
    }

    if (status === Status.SUCCESS && items.length === 0) {
      return <p className="noResults">Ничего не найдено 😕</p>;
    }

    return items.map((pizza) => <PizzaItem key={pizza.id} {...pizza} />);
  };

  return (
    <main>
      <div className="navigationMenu">
        <Categories />
        <Sort sort={sort} desc={desc} />
      </div>
      <h1>Все пиццы</h1>
      <div className="pizzaWrapper">
        <ul className={totalPages === 0 ? 'templateNone' : ''}>{renderPizzas()}</ul>
      </div>
      <ThemeProvider theme={theme}>
        {status !== Status.ERROR ? (
          <Pagination
            count={totalPages}
            variant="outlined"
            color="primary"
            onChange={(_, page) => dispatch(setCurrentPage(page))}
            page={currentPage}
            className={totalPages === 0 ? 'display-none' : ''}
          />
        ) : (
          <NotFoundBlock />
        )}
      </ThemeProvider>
    </main>
  );
};
