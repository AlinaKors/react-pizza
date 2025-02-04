import { useState, useContext } from 'react';

import { PizzaContext } from '../context';

export const Sort = () => {
  const { desc, sort, setSort, setDesc, sortBy } = useContext(PizzaContext);

  const [isOpen, setIsOpen] = useState(false);

  const onSetSort = (item) => {
    setIsOpen(false);
    setSort(item);
  };

  return (
    <div className="sort">
      <div className={desc ? 'triangle desc' : 'triangle'} onClick={() => setDesc(!desc)}></div>
      <div className="sortBy">
        Сортировка по: <span onClick={() => setIsOpen(!isOpen)}>{sort.name}</span>
      </div>
      <ul className={isOpen ? '' : 'close'}>
        {sortBy.map((sortItem) => (
          <li
            key={sortItem.name}
            onClick={() => onSetSort(sortItem)}
            className={sort.name === sortItem.name ? 'isActive' : ''}
          >
            {sortItem.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
