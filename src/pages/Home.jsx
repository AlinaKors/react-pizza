import axios from 'axios';
import { useEffect, useState } from 'react';

import { Categories } from '../components/Categories';
import { PizzaItem } from '../components/PizzaItem';
import { Sort } from '../components/Sort';
import { SkeletonBlock } from '../components/PizzaItem/SkeletonBlock';

import { PizzaContext } from '../context';
export const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  const [loading, setLoading] = useState(false);

  const [sort, setSort] = useState(0);
  const [desc, setDesc] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState(0);

  const categories = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые'];

  const sortBy = ['популярности', 'цене', 'алфавиту'];
  const sortByEng = ['rating', 'price', 'title'];

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `https://31f63cbf290f51e3.mokky.dev/pizzas?category=${
            selectedCategory === 0 ? '*' : selectedCategory
          }&sortBy=${desc ? '-' + sortByEng[sort] : sortByEng[sort]}`,
        );
        setPizzas(data);
        setLoading(true);
      } catch (error) {
        console.log('Не удалось загрузить пиццы :с');
        console.error(error);
      }
    })();
  }, [desc, sort, selectedCategory]);

  return (
    <PizzaContext.Provider
      value={{
        pizzas,
        sortBy,
        sort,
        setSort,
        desc,
        setDesc,
        categories,
        selectedCategory,
        setSelectedCategory,
      }}
    >
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
      </main>
    </PizzaContext.Provider>
  );
};
