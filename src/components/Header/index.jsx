import { Link } from 'react-router';

import { Search } from '../Search';
import styles from './Header.module.scss';

export const Header = () => {
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
          <div className={styles.price}>520 ₽</div>
          <div className={styles.cart}>
            <img src="src/assets/img/cart.svg" alt="cart icon" />
            <span>3</span>
          </div>
        </div>
      </Link>
    </header>
  );
};
