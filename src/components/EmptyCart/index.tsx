import { Link } from 'react-router';
import styles from './EmptyCart.module.scss';
import { Button } from '../Shared/Button';

//пустая корзина
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
        <Button classNameBtn={'backBtn'} textBtn={'Вернуться назад'} />
      </Link>
    </div>
  );
};
