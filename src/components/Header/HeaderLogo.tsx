import { memo } from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/img/logo.png';

//логотип
export const HeaderLogo = memo(() => {
  return (
    <div className={styles.logo}>
      <img src={logo} alt="small pizza" />
      <div className={styles.logoName}>
        <span>PIZZA PET</span>
        <p>это самая удивительная пицца</p>
      </div>
    </div>
  );
});
