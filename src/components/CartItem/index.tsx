import { FC } from 'react';
import styles from './CartItem.module.scss';

import IconAdd from '../../assets/img/plus.svg?react';

import IconMinus from '../../assets/img/minus.svg?react';
import { typePizza } from '../../utils/initialParams';

import { ItemType, ProductType } from '@/src/store/cart/types';
import { Button } from '../Button';

type CartItemProps = {
  product: ProductType;
  handleDeleteAllProduct: (product: ProductType, item: ItemType) => void;
  handleDeleteProduct: (product: ProductType, item: ItemType) => void;
  handleAddProduct: (product: ProductType) => void;
};

//Позиции в корзине
export const CartItem: FC<CartItemProps> = ({
  product,
  handleDeleteAllProduct,
  handleDeleteProduct,
  handleAddProduct,
}) => {
  const { item } = product;

  return (
    <li>
      <div className={styles.cartItemInfo}>
        <img src={item.imageUrl} alt="pizza" />
        <div className={styles.namePizza}>
          <h2>{item.title}</h2>
          <p>
            {typePizza[item.type]}, {item.size} см.
          </p>
        </div>
      </div>
      <div className={styles.countBlock}>
        <Button classNameBtn={'minus'} handleClick={() => handleDeleteProduct(product, item)}>
          <IconMinus />
        </Button>
        <h2>{item.count}</h2>
        <Button classNameBtn={'plus'} handleClick={() => handleAddProduct(product)}>
          <IconAdd />
        </Button>
      </div>
      <h2 className={styles.price}>{item.price * item.count} ₽</h2>
      <Button classNameBtn={'deleteBtn'} handleClick={() => handleDeleteAllProduct(product, item)}>
        <IconAdd />
      </Button>
    </li>
  );
};
