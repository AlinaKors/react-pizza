import { FC, memo } from 'react';
import styles from './CartItem.module.scss';

import IconAdd from '../../assets/img/plus.svg?react';

import IconMinus from '../../assets/img/minus.svg?react';
import { typePizza } from '../../utils/initialParams';

import { ItemType } from '@/src/store/cart/types';
import { Button } from '../Shared/Button';

type CartItemProps = {
  product: ItemType;
  handleDeleteAllProduct: (item: ItemType) => void;
  handleDeleteProduct: (item: ItemType) => void;
  handleAddProduct: (product: ItemType) => void;
};

//Позиции в корзине
export const CartItem: FC<CartItemProps> = memo(
  ({ product, handleDeleteAllProduct, handleDeleteProduct, handleAddProduct }) => {
    return (
      <li>
        <div className={styles.cartItemInfo}>
          <img src={product.imageUrl} alt="pizza" />
          <div className={styles.namePizza}>
            <h2>{product.title}</h2>
            <p>
              {typePizza[product.type]}, {product.size} см.
            </p>
          </div>
        </div>
        <div className={styles.countBlock}>
          <Button classNameBtn={'minus'} handleClick={() => handleDeleteProduct(product)}>
            <IconMinus />
          </Button>
          <h2>{product.count}</h2>
          <Button classNameBtn={'plus'} handleClick={() => handleAddProduct(product)}>
            <IconAdd />
          </Button>
        </div>
        <h2 className={styles.price}>{product.price * product.count} ₽</h2>
        <Button classNameBtn={'deleteBtn'} handleClick={() => handleDeleteAllProduct(product)}>
          <IconAdd />
        </Button>
      </li>
    );
  },
);
