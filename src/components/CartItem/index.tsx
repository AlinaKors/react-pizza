import { FC } from 'react';
import { useDispatch } from 'react-redux';

import styles from './CartItem.module.scss';

import IconAdd from '../../assets/img/plus.svg?react';

import IconMinus from '../../assets/img/minus.svg?react';
import { typePizza } from '../../assets/initialParams';

import {
  addProduct,
  deleteProduct,
  deleteAllProduct,
  CartItemType,
} from '../../app/slices/cartSlice';

type CartItemProps = {
  product: CartItemType;
};

export const CartItem: FC<CartItemProps> = ({ product }) => {
  const dispatch = useDispatch();

  const { item } = product;

  const handleDeleteAllProduct = () => {
    dispatch(
      deleteAllProduct({ key: product.key, id: item.id, price: item.price, count: item.count }),
    );
  };

  const handleDeleteProduct = () => {
    dispatch(
      deleteProduct({ key: product.key, id: item.id, price: item.price, count: item.count }),
    );
  };

  const handleAddProduct = () => {
    dispatch(addProduct(product));
  };

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
        <button onClick={handleDeleteProduct}>
          <IconMinus />
        </button>
        <h2>{item.count}</h2>
        <button onClick={handleAddProduct}>
          <IconAdd />
        </button>
      </div>
      <h2 className={styles.price}>{item.price * item.count} ₽</h2>
      <button className={styles.deleteBtn} onClick={handleDeleteAllProduct}>
        <IconAdd />
      </button>
    </li>
  );
};
