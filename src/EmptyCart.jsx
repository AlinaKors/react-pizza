export default function EmptyCart() {
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
      <div className="emptyWrapper">
        <h1>
          Корзина пустая <img src="img/sadSmile.png" alt="sad Smile" />
        </h1>
        <p>
          Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать пиццу, перейди на
          главную страницу.
        </p>
        <img src="img/emptyCart.png" alt="people with cart" />
        <button className="backBtn">Вернуться назад</button>
      </div>
    </div>
  );
}
