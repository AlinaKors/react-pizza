import { useEffect } from 'react';
import { Pagination } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import qs from 'qs';

import { Categories } from '../components/Categories';
import { PizzaItem } from '../components/PizzaItem';
import { Sort } from '../components/Sort';
import { SkeletonBlock } from '../components/PizzaItem/SkeletonBlock';
import { NotFoundPizzas } from '../components/NotFoundBlock';
import { initialParams } from '../assets/initialParams';
import { isEqual } from '../assets/isEqual';

import { setCurrentPage, setInitialFilter } from '../redux/slices/filterSlice';
import { fetchPizzas } from '../redux/slices/pizzaSlice';

const theme = createTheme({
  palette: {
    primary: {
      main: '#eb5a1e',
    },
  },
});

export const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { items, status, totalPage } = useSelector((state) => state.pizza);
  const { selectedCategory, desc, sort, search, currentPage } = useSelector(
    (state) => state.filter,
  );

  const getPizzas = async () => {
    await dispatch(fetchPizzas(getParamsFilter()));
    console.log('checking', status === 'success', totalPage);
    totalPage < currentPage && dispatch(setCurrentPage(1));
  };

  const getParamsFilter = () => {
    const sortCategory = selectedCategory === 0 ? '*' : selectedCategory;
    const sortByParams = desc ? '-' + sort.sortParams : sort.sortParams;
    const searchInput = search ? `*${search}` : '*';
    const pageParams = currentPage > 1 ? `${currentPage}` : '1';

    const params = qs.stringify({
      category: sortCategory,
      sortBy: sortByParams,
      page: pageParams,
      title: searchInput,
    });

    return params;
  };

  useEffect(() => {
    if (!location.search) {
      dispatch(setInitialFilter(initialParams));
    }
  }, [location.search]);

  useEffect(() => {
    console.log('зашли');
    getPizzas();
    isEqual(initialParams, { selectedCategory, desc, sort, search, currentPage })
      ? navigate('')
      : navigate(`?${getParamsFilter()}`);
  }, [selectedCategory, desc, sort, currentPage, search]);

  const pizzasBlock = items.map((pizzaItem) => <PizzaItem {...pizzaItem} key={pizzaItem.id} />);

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
        {totalPage > 0 ? (
          <Pagination
            count={totalPage}
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
