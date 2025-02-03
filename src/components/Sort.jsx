import { useState } from 'react';

export const Sort = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sort, setSort] = useState('популярности');

  const sortBy = ['популярности', 'цене', 'алфавиту'];

  const onSetSort = (item) => {
    setIsOpen(false);
    setSort(item);
  };

  return (
    <div className="sort">
      <div
        className={isOpen ? 'triangle' : 'triangle close'}
        onClick={() => setIsOpen(!isOpen)}
      ></div>
      <div className="sortBy">
        Сортировка по: <span onClick={() => setIsOpen(!isOpen)}>{sort}</span>
      </div>
      <ul className={isOpen ? '' : 'close'}>
        {sortBy.map((item) => (
          <li
            key={item}
            onClick={() => onSetSort(item)}
            className={sort === item ? 'isActive' : ''}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
