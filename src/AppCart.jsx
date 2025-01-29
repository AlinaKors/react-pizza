import IconDelete from '/public/img/cartDelete.svg?react';
import IconAdd from '/public/img/plus.svg?react';
import IconBack from '/public/img/back.svg?react';
import IconMinus from '/public/img/minus.svg?react';
export default function AppCart() {
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
      <div className="cartWrapper">
        <div className="cartTop">
          <div className="cartName">
            <img src="img/cartBig.png" alt="cart icon" />
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
                <img src="img/pizza1.jpg" alt="pizza" />
                <div className="namePizza">
                  <h2>Сырный цыпленок</h2>
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
            <li>
              <div className="cartItemInfo">
                <img src="img/pizza1.jpg" alt="pizza" />
                <div className="namePizza">
                  <h2>Сырный цыпленок</h2>
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
            <li>
              <div className="cartItemInfo">
                <img src="img/pizza1.jpg" alt="pizza" />
                <div className="namePizza">
                  <h2>Сырный цыпленок</h2>
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
            <li>
              <div className="cartItemInfo">
                <img src="img/pizza1.jpg" alt="pizza" />
                <div className="namePizza">
                  <h2>Сырный цыпленок</h2>
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
    </div>
  );
}
