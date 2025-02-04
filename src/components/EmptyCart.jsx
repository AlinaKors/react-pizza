export default function EmptyCart() {
  return (
    <div className="emptyWrapper">
      <h1>
        Корзина пустая <img src="src/assets/img/sadSmile.png" alt="sad Smile" />
      </h1>
      <p>
        Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать пиццу, перейди на
        главную страницу.
      </p>
      <img src="src/assets/img/emptyCart.png" alt="people with cart" />
      <button className="backBtn">Вернуться назад</button>
    </div>
  );
}
