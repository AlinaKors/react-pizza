import styles from './CartBtn.module.scss';

type CartBtnProps = {
  totalPrice: number;
  totalItems: number;
};

//кнопка для перехода в корзину
export const CartBtn: React.FC<CartBtnProps> = ({ totalItems, totalPrice }) => {
  return (
    <div className={styles.cartContaner}>
      <div className={styles.price}>{totalPrice} ₽</div>
      <div className={styles.cart}>
        <img src="src/assets/img/cart.svg" alt="cart icon" />
        <span>{totalItems}</span>
      </div>
    </div>
  );
};
