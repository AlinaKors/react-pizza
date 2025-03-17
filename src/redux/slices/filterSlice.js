import { createSlice } from '@reduxjs/toolkit';

import { initialParams } from '../../assets/initialParams';

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialParams,
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
    setInitialFilter: (state, actions) => {
      state.sort = actions.payload.sort;
      state.desc = actions.payload.desc;
      state.selectedCategory = actions.payload.selectedCategory;
      state.currentPage = actions.payload.currentPage;
      state.search = actions.payload.search;
    },
  },
});

export const {
  changeSort,
  changeCategory,
  toggleSort,
  setSearch,
  setCurrentPage,
  setInitialFilter,
} = filterSlice.actions;

export default filterSlice.reducer;
