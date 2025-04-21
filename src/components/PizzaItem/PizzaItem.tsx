import { FC, useCallback } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../store/cart/slice';
import { ItemType } from '../../store/cart/types';
import { selectCart } from '../../store/cart/selectors';
import { PizzaItemProps } from './types';

import { PizzaItemComponent } from './PizzaItemComponent';

export const PizzaItem: FC<PizzaItemProps> = ({ imageUrl, title, types, id, sizes, prices }) => {
  const dispatch = useDispatch();

  const [sizeInput, setSizeInput] = useState(0);
  const [typeInput, setTypeInput] = useState(0);

  const { countItems } = useSelector(selectCart);
  const countAdd = countItems[id] || 0;

  const selectedSize = sizes[sizeInput];
  const selectedType = types[typeInput];
  const price = prices[selectedSize];

  //добавление пицц в корзину
  const handleAddToCart = useCallback(() => {
    const product: ItemType = {
      id,
      title,
      price: price,
      imageUrl,
      size: selectedSize,
      type: selectedType,
      count: 1,
      key: `${id}${selectedSize}${selectedType}`,
    };
    dispatch(addProduct(product));
  }, [dispatch, id, title, imageUrl, selectedSize, selectedType, price]);

  return (
    <PizzaItemComponent
      {...{
        imageUrl,
        title,
        id,
        types,
        sizes,
        typeInput,
        setTypeInput,
        sizeInput,
        setSizeInput,
        price,
        handleAddToCart,
        countAdd,
      }}
    />
  );
};
