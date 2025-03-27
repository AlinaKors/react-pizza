import React from 'react';

import { useEffect, useState } from 'react';
import { Pagination } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router';

import { Categories } from '../components/Categories';
import { PizzaItem } from '../components/PizzaItem';
import { Sort } from '../components/Sort';
import { SkeletonBlock } from '../components/PizzaItem/SkeletonBlock';
import { NotFoundPizzas } from '../components/NotFoundBlock';
import { initialParams } from '../assets/initialParams';
import { isEqual } from '../assets/isEqual';

import { setCurrentPage, setInitialFilter } from '../app/slices/filterSlice';
import { fetchByPizzas } from '../app/slices/pizzaSlice';
import { RootState } from '../app/store';

const theme = createTheme({
  palette: {
    primary: {
      main: '#eb5a1e',
    },
  },
});

export const Home = () => {
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();

  const { selectedCategory, desc, sort, search, currentPage } = useSelector(
    (state) => state.filter,
  );

  const [totalPages, setTotalPages] = useState<number>(0);

  const { items, status } = useSelector((state: RootState) => state.pizza);

  const getPizzas = async () => {
    const { meta } = await dispatch(fetchByPizzas(searchParams)).unwrap();
    setTotalPages(meta.total_pages);
    meta.total_pages < currentPage && dispatch(setCurrentPage(1));
  };

  const getParamsFilter = () => {
    const sortCategory = selectedCategory === 0 ? '*' : selectedCategory;
    const sortByParams = desc ? '-' + sort.sortParams : sort.sortParams;
    const searchInput = search ? `*${search}` : '*';
    const pageParams = currentPage > 1 ? `${currentPage}` : '1';

    setSearchParams({
      category: sortCategory,
      sortBy: sortByParams,
      page: pageParams,
      title: searchInput,
    });
  };

  const emptyParams = () => {
    setSearchParams({});
  };

  useEffect(() => {
    getPizzas();

    if (!searchParams.size) {
      dispatch(setInitialFilter(initialParams));
    }
  }, [searchParams]);

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
        <Sort />
      </div>
      <h1>Все пиццы</h1>
      <div className="pizzaWrapper">
        <ul>{status === 'success' ? pizzasBlock : skeletons}</ul>
      </div>
      <ThemeProvider theme={theme}>
        {totalPages > 0 ? (
          <Pagination
            count={totalPages}
            variant="outlined"
            color="primary"
            onChange={(_, page) => dispatch(setCurrentPage(page))}
            page={currentPage}
          />
        ) : (
          <NotFoundPizzas />
        )}
      </ThemeProvider>
    </main>
  );
};
