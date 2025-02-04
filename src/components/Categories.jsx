import { useContext } from 'react';
import { PizzaContext } from '../context';
export const Categories = () => {
  const { categories, selectedCategory, setSelectedCategory } = useContext(PizzaContext);

  return (
    <ul className="categories">
      {categories.map((category, index) => (
        <li
          key={category}
          className={selectedCategory == index ? 'isActive' : ''}
          onClick={() => setSelectedCategory(index)}
        >
          {category}
        </li>
      ))}
    </ul>
  );
};
