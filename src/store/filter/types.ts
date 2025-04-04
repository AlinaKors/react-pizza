export type SortType = {
  sortBy: string;
  category: number | string;
  title: string;
  page: number;
  [key: string]: string | number | undefined;
};

export type SortTypeBy = {
  name: string;
  sortParams: string;
};

export interface IFilterSliceState {
  selectedCategory: number;
  desc: boolean;
  currentPage: number;
  search: string;
  sort: SortTypeBy;
}
