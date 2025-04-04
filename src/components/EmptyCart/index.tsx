import { Link } from 'react-router';
import styles from './EmptyCart.module.scss';

export const EmptyCart = () => {
  return (
    <div className={styles.emptyWrapper}>
      <h1>
        Корзина пустая <img src="src/assets/img/sadSmile.png" alt="sad Smile" />
      </h1>
      <p>
        Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать пиццу, перейди на
        главную страницу.
      </p>
      <img src="src/assets/img/emptyCart.png" alt="people with cart" />
      <Link to="/">
        <button className={styles.backBtn}>Вернуться назад</button>
      </Link>
    </div>
  );
};
