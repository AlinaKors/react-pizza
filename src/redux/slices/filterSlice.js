import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    sort: { name: 'популярности', sortParams: 'rating' },
    selectedCategory: 0,
    desc: false,
    currentPage: 1,
    search: '',
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
    setSearch: (state, actions) => {
      state.search = actions.payload;
    },
    setCurrentPage: (state, actions) => {
      state.currentPage = actions.payload;
    },
  },
});

export const { changeSort, changeCategory, toggleSort, setSearch, setCurrentPage } =
  filterSlice.actions;

export default filterSlice.reducer;
