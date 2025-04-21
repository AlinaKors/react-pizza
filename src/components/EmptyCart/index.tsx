import { Link } from 'react-router';
import styles from './EmptyCart.module.scss';
import { Button } from '../Shared/Button';
import { memo } from 'react';
import sadSmile from '../../assets/img/sadSmile.png';
import emptyCart from '../../assets/img/emptyCart.png';

//пустая корзина
export const EmptyCart = memo(() => {
  return (
    <div className={styles.emptyWrapper}>
      <h1>
        Корзина пустая <img src={sadSmile} alt="sad Smile" />
      </h1>
      <p>
        Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать пиццу, перейди на
        главную страницу.
      </p>
      <img src={emptyCart} alt="people with cart" />
      <Link to="/">
        <Button classNameBtn={'backBtn'} textBtn={'Вернуться назад'} />
      </Link>
    </div>
  );
});
