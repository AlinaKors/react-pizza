import { memo } from 'react';
import styles from './CartBtn.module.scss';
import cartIcon from '../../assets/img/cart.svg';

type CartBtnComponentProps = {
  totalItems: number;
  totalPrice: number;
};

//кнопка для перехода в корзину
export const CartBtnComponent: React.FC<CartBtnComponentProps> = memo(
  ({ totalPrice, totalItems }) => {
    return (
      <div className={styles.cartContaner}>
        <div className={styles.price}>{totalPrice} ₽</div>
        <div className={styles.cart}>
          <img src={cartIcon} alt="cart icon" />
          <span>{totalItems}</span>
        </div>
      </div>
    );
  },
);
