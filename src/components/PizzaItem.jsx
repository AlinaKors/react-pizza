import pizzas from './assets/pizzas.json';
export const PizzaItem = () => {
  return (
    <ul>
      {/* {JSON,tomap((pizza) => (
        <li
        key={pizza}>
          <picture>
            <img src="src/assets/img/pizza1.jpg" alt="pizza" />
          </picture>
          <h3>Чизбургер-пицца</h3>
          <div className="doughChoise">
            <div className="type">
              <input type="radio" id="thin" name="type" value="thin" />
              <label htmlFor="thin">тонкое</label>
              <input type="radio" id="traditional" name="type" value="traditional" />
              <label htmlFor="traditional">традиционное</label>
            </div>
            <div className="size">
              <input type="radio" id="25" name="size" value="25" />
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
        </li> */}
      {/* ))} */}
    </ul>
  );
};
