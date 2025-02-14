export const initialParams = {
  sort: { name: 'популярности', sortParams: 'rating' },
  selectedCategory: 0,
  desc: false,
  currentPage: 1,
  search: '',
};

export const sortBy = [
  { name: 'популярности', sortParams: 'rating' },
  { name: 'цене', sortParams: 'price' },
  { name: 'алфавиту', sortParams: 'title' },
];
