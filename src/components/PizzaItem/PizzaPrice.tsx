import styles from './PizzaItem.module.scss';
import IconAdd from '../../assets/img/plus.svg?react';
import { memo } from 'react';
import { PizzaPriceProps } from './types';

export const PizzaPrice: React.FC<PizzaPriceProps> = memo(
  ({ price, handleAddToCart, countAdd }) => {
    return (
      <div className={styles.addContainer}>
        <h2>{price} ₽</h2>
        <button onClick={handleAddToCart} className={styles.addBtn}>
          <IconAdd />
          <span>Добавить</span>
          {countAdd !== 0 && (
            <div className={styles.countItem}>
              <span>{countAdd}</span>
            </div>
          )}
        </button>
      </div>
    );
  },
);
