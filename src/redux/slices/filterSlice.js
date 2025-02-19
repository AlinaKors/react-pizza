import qs from 'qs';

import { createSlice } from '@reduxjs/toolkit';

import { initialParams, sortBy } from '../../assets/initialParams';

const setSort = (sortParams) => {
  const sort = sortBy.find((obj) => obj.sortParams === sortParams);
  return sort;
};
const getInitialState = () => {
  const searchParams = window.location.search;

  if (searchParams) {
    const params = qs.parse(searchParams.slice(1));
    const initialState = {};
    if (params.sortBy.includes('-')) {
      initialState.desc = true;
      initialState.sort = setSort(params.sortBy.slice(1));
    } else {
      initialState.desc = false;
      initialState.sort = setSort(params.sortBy);
    }
    initialState.selectedCategory = params.category === '*' ? 0 : Number(params.category);
    initialState.currentPage = Number(params.page);
    initialState.search = params.title === '*' ? '' : params.title;
    return initialState;
  }

  return initialParams;
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: getInitialState(),
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
