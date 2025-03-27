import { Link } from 'react-router';
import { useSelector } from 'react-redux';

import { Search } from '../Search';
import styles from './Header.module.scss';
import { RootState } from '../../app/store';

export const Header = () => {
  const { totalPrice, totalItems } = useSelector((state: RootState) => state.cart);

  return (
    <header>
      <Link to="/">
        <div className={styles.logo}>
          <img src="src/assets/img/logo.png" alt="small pizza" />
          <div className={styles.logoName}>
            <span>PIZZA PET</span>
            <p>это самая удивительная пицца</p>
          </div>
        </div>
      </Link>
      <Search />
      <Link to="/cart">
        <div className={styles.cartContaner}>
          <div className={styles.price}>{totalPrice} ₽</div>
          <div className={styles.cart}>
            <img src="src/assets/img/cart.svg" alt="cart icon" />
            <span>{totalItems}</span>
          </div>
        </div>
      </Link>
    </header>
  );
};
