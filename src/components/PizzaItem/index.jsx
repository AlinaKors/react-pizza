import { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addProduct } from '../../redux/slices/cartSlice';

import IconAdd from '../../assets/img/plus.svg?react';
import styles from './PizzaItem.module.scss';
export const PizzaItem = ({ imageUrl, title, types, id, sizes, price }) => {
  const dispatch = useDispatch();

  const typePizza = ['традиционное', 'тонкое'];

  const [sizeInput, setSizeInput] = useState(0);
  const [typeInput, setTypeInput] = useState(0);

  const testing = useSelector((state) => state.cart.addProducts);

  console.log(testing);

  const handleAddToCart = () => {
    const product = {
      [id.toString() + sizes[sizeInput] + types[typeInput]]: {
        id,
        title,
        price,
        size: sizes[sizeInput],
        type: types[typeInput],
        count: 1,
      },
    };
    dispatch(addProduct(product));
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
            <Fragment key={typePizza[type].toString() + id}>
              <input
                type="radio"
                id={typePizza[type].toString() + id}
                name={'type' + id}
                value={typePizza[type]}
                checked={typeInput === type}
                onChange={() => setTypeInput(type)}
              />
              <label htmlFor={typePizza[type].toString() + id}>{typePizza[type]}</label>
            </Fragment>
          ))}
        </div>
        <div className={styles.size}>
          {sizes.map((size, index) => (
            <Fragment key={size.toString() + id}>
              <input
                type="radio"
                id={size.toString() + id}
                name={'size' + id}
                value={size}
                checked={sizeInput === index}
                onChange={() => setSizeInput(index)}
              />
              <label htmlFor={size.toString() + id}>{size} см.</label>
            </Fragment>
          ))}
        </div>
      </div>
      <div className={styles.addContainer}>
        <h2>от {price} ₽</h2>
        <button className={styles.addBtn} onClick={handleAddToCart}>
          <IconAdd />
          <span>Добавить</span>
          {/* <div className={styles.countItem}>
                <span>2</span>
              </div> */}
        </button>
      </div>
    </li>
  );
};
