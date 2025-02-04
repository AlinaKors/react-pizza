import IconDelete from '../assets/img/cartDelete.svg?react';
import IconAdd from '../assets/img/plus.svg?react';
import IconBack from '../assets/img/back.svg?react';
import IconMinus from '../assets/img/minus.svg?react';

export const Cart = () => {
  return (
    <div className="cartWrapper">
      <div className="cartTop">
        <div className="cartName">
          <img src="src/assets/img/cartBig.png" alt="cart icon" />
          <h1>Корзина</h1>
        </div>
        <button className="deleteItems">
          <IconDelete />
          <span>Очистить корзину</span>
        </button>
      </div>
      <div className="cartItems">
        <ul>
          <li>
            <div className="cartItemInfo">
              <img src="src/assets/img/pizza1.jpg" alt="pizza" />
              <div className="namePizza">
                <h2>Пеперони фреш с перцем</h2>
                <p>тонкое тесто, 26 см.</p>
              </div>
            </div>
            <div className="countBlock">
              <button className="minus">
                <IconMinus />
              </button>
              <h2>2</h2>
              <button className="plus">
                <IconAdd />
              </button>
            </div>
            <h2 className="price">770 ₽</h2>
            <button className="deleteBtn">
              <IconAdd />
            </button>
          </li>
        </ul>
      </div>
      <div className="cartTotal">
        <div className="totalItems">
          Всего пицц: <span>3 шт.</span>
        </div>
        <div className="totalPrice">
          Сумма заказа: <span>900 ₽</span>
        </div>
      </div>
      <div className="cartBottom">
        <button className="backBtn">
          <IconBack />
          Вернуться назад
        </button>
        <button className="orderBtn">Оплатить сейчас</button>
      </div>
    </div>
  );
};
