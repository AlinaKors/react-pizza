import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    sort: { name: 'популярности', sortParams: 'rating' },
    selectedCategory: 0,
    desc: false,
  },
  reducers: {
    changeSort: (state, actions) => {
      state.sort = actions.payload;
    },
    changeCategory: (state, actions) => {
      state.selectedCategory = actions.payload;
    },
    toggleSort: (state) => {
      state.desc = !state.desc;
    },
  },
});

// Функция действия генерируется на каждую функцию релюсера(reducer), определённую в createSlice
export const { changeSort, changeCategory, toggleSort } = filterSlice.actions;

export default filterSlice.reducer;
