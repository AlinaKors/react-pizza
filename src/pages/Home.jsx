import axios from 'axios';
import { useEffect, useState } from 'react';
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
import { setPizzaItems } from '../redux/slices/pizzaSlice';

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

  const [loading, setLoading] = useState(false);

  const [totalPages, setTotalPages] = useState(0);

  const pizzas = useSelector((state) => state.pizza.items);
  const { selectedCategory, desc, sort, search, currentPage } = useSelector(
    (state) => state.filter,
  );

  const getPizzas = async () => {
    try {
      setLoading(false);
      const { data } = await axios.get(
        `https://31f63cbf290f51e3.mokky.dev/pizzas?limit=4&${getParamsFilter()}`,
      );
      dispatch(setPizzaItems(data.items));
      setTotalPages(data.meta.total_pages);
      data.meta.total_pages < currentPage && dispatch(setCurrentPage(1));
      setLoading(true);
    } catch (error) {
      console.log('Не удалось загрузить пиццы :с');
      console.error(error);
    }
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
    getPizzas();
    isEqual(initialParams, { selectedCategory, desc, sort, search, currentPage })
      ? navigate('')
      : navigate(`?${getParamsFilter()}`);
  }, [selectedCategory, desc, sort, currentPage, search]);

  const pizzasBlock = pizzas.map((pizzaItem) => <PizzaItem {...pizzaItem} key={pizzaItem.id} />);

  const skeletons = [...new Array(8)].map((_, index) => <SkeletonBlock key={index} />);

  return (
    <main>
      <div className="navigationMenu">
        <Categories />
        <Sort />
      </div>
      <h1>Все пиццы</h1>
      <div className="pizzaWrapper">
        <ul>{loading ? pizzasBlock : skeletons}</ul>
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
