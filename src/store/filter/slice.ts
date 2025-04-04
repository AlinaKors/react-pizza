import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFilterSliceState, SortTypeBy } from './types';
import { getInitialState } from './setInitialParams';

const paramsQuery = new URLSearchParams(window.location.search);

//состояние фильтрации
const filterSlice = createSlice({
  name: 'filter',
  initialState: getInitialState(paramsQuery),
  reducers: {
    //измененение сортировки по наименованию
    changeSort: (state, actions: PayloadAction<SortTypeBy>) => {
      state.sort = actions.payload;
    },
    //измененение категории
    changeCategory: (state, actions: PayloadAction<number>) => {
      state.selectedCategory = actions.payload;
    },
    //измененение сортировки по убыванию или возрастанию
    toggleSort: (state) => {
      state.desc = !state.desc;
    },
    //измененение фильтра по поиску
    setSearch: (state, actions: PayloadAction<string>) => {
      state.search = actions.payload;
      state.selectedCategory = 0;
    },
    //измененение страницы
    setCurrentPage: (state, actions: PayloadAction<number>) => {
      state.currentPage = actions.payload;
    },
    //установка начального состояние при не пустых query параметрах
    setInitialFilter: (state, actions: PayloadAction<IFilterSliceState>) => {
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
