function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="logo">
          <img src="img/logo.png" alt="small pizza" />
          <div className="logoName">
            <span>PIZZA PET</span>
            <p>это самая удивительная пицца</p>
          </div>
        </div>
        <div className="cartContaner">
          <div className="price">520 ₽</div>
          <div className="cart">
            <img src="img/cart.svg" alt="cart icon" />
            <span>3</span>
          </div>
        </div>
      </header>
      <main>
        <div className="categories">
          <ul>
            <li>Все</li>
            <li>Мясные</li>
            <li>Вегетарианская</li>
            <li>Гриль</li>
            <li>Острые</li>
            <li>Закрытые</li>
          </ul>
          <div className="sort">
            <div className="triangle"></div>
            <div className="sortBy">
              Сортировка по: <span>популярности</span>
            </div>
            <ul>
              <li>популярности</li>
              <li>по цене</li>
              <li>по алфавиту</li>
            </ul>
          </div>
        </div>
        <h1>Все пиццы</h1>
        <div className="pizzaWrapper"></div>
      </main>
    </div>
  );
}

export default App;
