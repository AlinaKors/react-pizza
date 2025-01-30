export const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="src/assets/img/logo.png" alt="small pizza" />
        <div className="logoName">
          <span>PIZZA PET</span>
          <p>это самая удивительная пицца</p>
        </div>
      </div>
      <div className="cartContaner">
        <div className="price">520 ₽</div>
        <div className="cart">
          <img src="src/assets/img/cart.svg" alt="cart icon" />
          <span>3</span>
        </div>
      </div>
    </header>
  );
};
