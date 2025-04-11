import { memo } from 'react';
import { PizzaInfo } from './PizzaInfo';
import styles from './PizzaItem.module.scss';
import { PizzaPrice } from './PizzaPrice';
import { PizzaType } from './PizzaType';
import { PizzaItemComponentProps } from './types';

export const PizzaItemComponent: React.FC<PizzaItemComponentProps> = memo(
  ({
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
  }) => {
    return (
      <li className={styles.pizzaItem}>
        <PizzaInfo imageUrl={imageUrl} title={title} />
        <PizzaType
          id={id}
          types={types}
          sizes={sizes}
          typeInput={typeInput}
          setTypeInput={setTypeInput}
          sizeInput={sizeInput}
          setSizeInput={setSizeInput}
        />
        <PizzaPrice price={price} handleAddToCart={handleAddToCart} countAdd={countAdd} />
      </li>
    );
  },
);
