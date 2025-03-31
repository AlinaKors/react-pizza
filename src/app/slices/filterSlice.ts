import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialParams, sortBy } from '../../assets/initialParams';

export type SortType = {
  sortBy: string;
  category: number | string;
  title: string;
  page: number;
  [key: string]: string | number | undefined;
};

type SortTypeBy = {
  name: string;
  sortParams: string;
};
interface IFilterSliceState {
  selectedCategory?: number;
  desc?: boolean;
  currentPage?: number;
  search?: string;
  sort?: SortTypeBy;
}

const setSort = (sortParams: string) => {
  const sort = sortBy.find((obj) => obj.sortParams === sortParams);
  if (sort !== undefined) {
    return sort;
  }
};

const paramsQuery = new URLSearchParams(window.location.search);

const getInitialState = (paramsQuery: URLSearchParams): IFilterSliceState => {
  let params: SortType = {
    sortBy: 'raiting',
    category: '*',
    title: '*',
    page: 1,
  };
  if (paramsQuery.size) {
    paramsQuery.entries().forEach((el) => {
      const [key, value] = el;
      params[key] = value;
    });
    let initialState: IFilterSliceState = {};
    if (params.sortBy) {
      if (params.sortBy.includes('-')) {
        initialState.desc = true;
        initialState.sort = setSort(params.sortBy.slice(1));
      } else {
        initialState.desc = false;
        initialState.sort = setSort(params.sortBy);
      }
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
  initialState: getInitialState(paramsQuery),
  reducers: {
    changeSort: (state, actions: PayloadAction<SortTypeBy>) => {
      state.sort = actions.payload;
    },
    changeCategory: (state, actions: PayloadAction<number>) => {
      state.selectedCategory = actions.payload;
    },
    toggleSort: (state) => {
      state.desc = !state.desc;
    },
    setSearch: (state, actions: PayloadAction<string>) => {
      state.search = actions.payload;
    },
    setCurrentPage: (state, actions: PayloadAction<number>) => {
      state.currentPage = actions.payload;
    },
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
