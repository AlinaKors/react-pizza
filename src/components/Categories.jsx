import { useState } from 'react';
export const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState('Все');

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  return (
    <ul className="categories">
      {categories.map((category) => (
        <li
          key={category}
          className={selectedCategory == category ? 'isActive' : ''}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </li>
      ))}
    </ul>
  );
};
