import IconAdd from '/public/img/plus.svg?react';

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
        <div className="navigationMenu">
          <ul className="categories">
            <li>Все</li>
            <li>Мясные</li>
            <li>Вегетарианская</li>
            <li>Гриль</li>
            <li>Острые</li>
            <li>Закрытые</li>
          </ul>
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
          <ul>
            <li>
              <picture>
                <img src="img/pizza1.jpg" alt="pizza" />
              </picture>
              <h3>Чизбургер-пицца</h3>
              <div className="doughChoise">
                <div className="type">
                  <input type="radio" id="thin" name="type" value="thin" checked />
                  <label htmlFor="thin">тонкое</label>
                  <input type="radio" id="traditional" name="type" value="traditional" />
                  <label htmlFor="traditional">традиционное</label>
                </div>
                <div className="size">
                  <input type="radio" id="25" name="size" value="25" checked />
                  <label htmlFor="25">25 см</label>
                  <input type="radio" id="35" name="size" value="35" />
                  <label htmlFor="35">35 см</label>
                  <input type="radio" id="40" name="size" value="40" />
                  <label htmlFor="40">40 см</label>
                </div>
              </div>
              <div className="addContainer">
                <h2>от 395 ₽</h2>
                <div className="addBtn">
                  <IconAdd />
                  <span>Добавить</span>
                  <div className="countItem">2</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
