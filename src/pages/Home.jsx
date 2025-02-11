import axios from 'axios';
import { useEffect, useState } from 'react';
import { Pagination } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';

import { Categories } from '../components/Categories';
import { PizzaItem } from '../components/PizzaItem';
import { Sort } from '../components/Sort';
import { SkeletonBlock } from '../components/PizzaItem/SkeletonBlock';

import { setPizzaItems } from '../redux/slices/pizzaSlice';

const theme = createTheme({
  palette: {
    primary: {
      main: '#eb5a1e',
    },
  },
});
export const Home = ({ search }) => {
  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const dispatch = useDispatch();
  const pizzas = useSelector((state) => state.pizza.items);
  const { selectedCategory, desc, sort } = useSelector((state) => state.filter);

  const sortCategory = selectedCategory === 0 ? '*' : selectedCategory;
  const sortByParams = desc ? '-' + sort.sortParams : sort.sortParams;
  const searchInput = search ? `&title=*${search}` : '';
  const pageParams = currentPage > 1 ? `&page=${currentPage}` : '';

  useEffect(() => {
    (async () => {
      try {
        setLoading(false);
        const { data } = await axios.get(
          `https://31f63cbf290f51e3.mokky.dev/pizzas?limit=4&category=${sortCategory}&sortBy=${sortByParams}${searchInput}${pageParams}`,
        );
        dispatch(setPizzaItems(data.items));
        setTotalPages(data.meta.total_pages);
        setLoading(true);
      } catch (error) {
        console.log('Не удалось загрузить пиццы :с');
        console.error(error);
      }
    })();
  }, [desc, sort, selectedCategory, search, currentPage]);

  return (
    <main>
      <div className="navigationMenu">
        <Categories />
        <Sort />
      </div>
      <h1>Все пиццы</h1>
      <div className="pizzaWrapper">
        <ul>
          {loading
            ? pizzas.map((pizzaItem) => <PizzaItem {...pizzaItem} key={pizzaItem.id} />)
            : [...new Array(8)].map((_, index) => <SkeletonBlock key={index} />)}
        </ul>
      </div>
      <ThemeProvider theme={theme}>
        <Pagination
          count={totalPages}
          variant="outlined"
          color="primary"
          onChange={(_, page) => setCurrentPage(page)}
        />
      </ThemeProvider>
    </main>
  );
};
