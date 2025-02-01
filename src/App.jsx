import { Header } from './components/Header';
import { Categories } from './components/Categories';
import { PizzaItems } from './components/PizzaItems';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <div className="navigationMenu">
          <Categories />
          <div className="sort">
            <div className="triangle close"></div>
            <div className="sortBy">
              Сортировка по: <span>популярности</span>
            </div>
            <ul className="close">
              <li>популярности</li>
              <li>по цене</li>
              <li>по алфавиту</li>
            </ul>
          </div>
        </div>
        <h1>Все пиццы</h1>
        <div className="pizzaWrapper">
          <PizzaItems />
        </div>
      </main>
    </div>
  );
}

export default App;
