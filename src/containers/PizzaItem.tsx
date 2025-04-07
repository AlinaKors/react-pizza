import { FC, useCallback, useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import { addProduct } from '../store/cart/slice';

import { typePizza } from '../utils/initialParams';
import { ProductType } from '@/src/store/cart/types';
import { InputRadioType } from '../components/InputRadioType';
import { AddBtn } from '../components/AddBtn';

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

  const { countItems } = useSelector((state: RootState) => state.persistedReducerCart);
  const countAdd = countItems.find((item) => item.id === id)?.count || 0;
  console.log(countItems);
  //добавление пицц в корзину
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
  };

  return (
    <li className="pizzaItem">
      <picture>
        <img src={imageUrl} alt="pizza" />
      </picture>
      <h3>{title}</h3>
      <div className="doughChoise">
        <div className="type">
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
        <div className="size">
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
      <div className="addContainer">
        <h2>{prices[sizes[sizeInput]]} ₽</h2>
        <AddBtn handleAddToCart={handleAddToCart} addBtn={countAdd} />
      </div>
    </li>
  );
};
