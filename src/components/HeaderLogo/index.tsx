import styles from './HeaderLogo.module.scss';

//логотип
export const HeaderLogo = () => {
  return (
    <div className={styles.logo}>
      <img src="src/assets/img/logo.png" alt="small pizza" />
      <div className={styles.logoName}>
        <span>PIZZA PET</span>
        <p>это самая удивительная пицца</p>
      </div>
    </div>
  );
};
