import { memo } from 'react';
import styles from './Header.module.scss';

//логотип
export const HeaderLogo = memo(() => {
  return (
    <div className={styles.logo}>
      <img src="src/assets/img/logo.png" alt="small pizza" />
      <div className={styles.logoName}>
        <span>PIZZA PET</span>
        <p>это самая удивительная пицца</p>
      </div>
    </div>
  );
});
