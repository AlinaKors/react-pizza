import { FC } from 'react';
import { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import { addProduct } from '../../store/cart/slice';

import { typePizza } from '../../utils/initialParams';
import IconAdd from '../../assets/img/plus.svg?react';
import styles from './PizzaItem.module.scss';
import { ProductType } from '@/src/store/cart/types';
import { InputRadioType } from '../InputRadioType';

type PizzaItemProps = {
  id: number;
  imageUrl: string;
  prices: { [key: string]: number };
  sizes: number[];
  title: string;
  types: number[];
};

export const PizzaItem: FC<PizzaItemProps> = ({ imageUrl, title, types, id, sizes, prices }) => {
  const dispatch = useDispatch();

  const [sizeInput, setSizeInput] = useState<number>(0);
  const [typeInput, setTypeInput] = useState<number>(0);
  const [addBtn, setAddBtn] = useState<boolean>(false);

  const { countItems } = useSelector((state: RootState) => state.persistedReducerCart);

  const handleAddToCart = () => {
    const product: ProductType = {
      key: id.toString() + sizes[sizeInput] + types[typeInput],
      item: {
        id,
        title,
        price: prices[sizes[sizeInput]],
        imageUrl,
        size: sizes[sizeInput],
        type: types[typeInput],
        count: 1,
      },
    };
    dispatch(addProduct(product));
    setAddBtn(true);
  };

  const getCountPizza = () => {
    return countItems.find((item) => item.id === id)?.count;
  };

  return (
    <li className={styles.pizzaItem}>
      <picture>
        <img src={imageUrl} alt="pizza" />
      </picture>
      <h3>{title}</h3>
      <div className={styles.doughChoise}>
        <div className={styles.type}>
          {types.map((type) => (
            <InputRadioType
              key={typePizza[type].toString() + id}
              velueType={typePizza[type]}
              id={id}
              type={type}
              checkedType={typeInput}
              setTypeInput={setTypeInput}
              nameInput={'type'}
            />
          ))}
        </div>
        <div className={styles.size}>
          {sizes.map((size, index) => (
            <InputRadioType
              key={size.toString() + id}
              velueType={size.toString() + ' см.'}
              id={id}
              type={index}
              checkedType={sizeInput}
              setTypeInput={setSizeInput}
              nameInput={'size'}
            />
          ))}
        </div>
      </div>
      <div className={styles.addContainer}>
        <h2>{prices[sizes[sizeInput]]} ₽</h2>
        <button className={styles.addBtn} onClick={handleAddToCart}>
          <IconAdd />
          <span>Добавить</span>
          {addBtn && (
            <div className={styles.countItem}>
              <span>{getCountPizza()}</span>
            </div>
          )}
        </button>
      </div>
    </li>
  );
};
