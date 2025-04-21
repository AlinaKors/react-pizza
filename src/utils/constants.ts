//начальные значения параметров страницы
export const initialParams = {
  selectedCategory: 0,
  desc: false,
  currentPage: 1,
  search: '',
  sort: { name: 'популярности', sortParams: 'rating' },
};

export const sortBy = [
  { name: 'популярности', sortParams: 'rating' },
  { name: 'цене', sortParams: 'price' },
  { name: 'алфавиту', sortParams: 'title' },
];

export const typePizza = ['традиционное', 'тонкое'];

export const categories = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые'];
