import { Fragment, useState } from 'react';

import pizzas from '../assets/pizzas.json';

import IconAdd from '../assets/img/plus.svg?react';
export const PizzaItems = () => {
  const typePizza = ['традиционное', 'тонкое'];

  const [sizeInput, setSizeInput] = useState();
  const [typeInput, setTypeInput] = useState();

  const onChangeSize = (e) => {
    setSizeInput(e.target.value);
  };

  const onChangeType = (e) => {
    setTypeInput(e.target.value);
    console.log(e.target.value);
    changeTypeWithSize(e.target.value);
  };

  const changeTypeWithSize = (e) => {
    console.log(sizeInput === '26', e);
    if (sizeInput === '26' && e === 'тонкое') {
      e = 'традиционное';
      setTypeInput('традиционное');
    }
  };

  return (
    <ul>
      {pizzas.map((pizza) => (
        <li key={pizza.id}>
          <picture>
            <img src={pizza.imageUrl} alt="pizza" />
          </picture>
          <h3>{pizza.title}</h3>
          <div className="doughChoise">
            <div className="type">
              {pizza.types.map((type, index) => (
                <Fragment key={typePizza[type].toString() + pizza.id}>
                  <input
                    type="radio"
                    id={typePizza[type].toString() + pizza.id}
                    name={'type' + pizza.id}
                    value={typePizza[type]}
                    defaultChecked={index === 0}
                    onChange={onChangeType}
                  />
                  <label htmlFor={typePizza[type].toString() + pizza.id}>{typePizza[type]}</label>
                </Fragment>
              ))}
            </div>
            <div className="size">
              {pizza.sizes.map((size, index) => (
                <Fragment key={size.toString() + pizza.id}>
                  <input
                    type="radio"
                    id={size.toString() + pizza.id}
                    name={'size' + pizza.id}
                    value={size}
                    defaultChecked={index === 0}
                    onChange={onChangeSize}
                  />
                  <label htmlFor={size.toString() + pizza.id}>{size} см.</label>
                </Fragment>
              ))}
            </div>
          </div>
          <div className="addContainer">
            <h2>от {pizza.price} ₽</h2>
            <div className="addBtn">
              <IconAdd />
              <span>Добавить</span>
              {/* <div className="countItem">
                <span>2</span>
              </div> */}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
