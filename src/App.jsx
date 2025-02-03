import axios from 'axios';
import { useEffect, useState } from 'react';

import { Header } from './components/Header';
import { Categories } from './components/Categories';
import { PizzaItems } from './components/PizzaItems';
import { Sort } from './components/Sort';

function App() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('https://31f63cbf290f51e3.mokky.dev/pizzas');
        setPizzas(data);
      } catch (error) {
        console.log('Не удалось загрузить пиццы :с');
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <main>
        <div className="navigationMenu">
          <Categories />
          <Sort />
        </div>
        <h1>Все пиццы</h1>
        <div className="pizzaWrapper">
          <ul>
            {pizzas.map((pizzaItem) => (
              <PizzaItems {...pizzaItem} key={pizzaItem.id} />
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
