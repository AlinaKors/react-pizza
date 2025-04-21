import { initialParams, sortBy } from '../utils/constants';
import { IFilterSliceState, SortType, SortTypeBy } from '../store/filter/types';

//установка начальных фильтров даже при обновлении
export const getInitialState = (paramsQuery: URLSearchParams): IFilterSliceState => {
  const params: SortType = {
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

    if (params.sortBy) {
      if (params.sortBy.includes('-')) {
        initialParams.desc = true;
        initialParams.sort = setSort(params.sortBy.slice(1));
      } else {
        initialParams.desc = false;
        initialParams.sort = setSort(params.sortBy);
      }
    }
    initialParams.selectedCategory = params.category === '*' ? 0 : Number(params.category);
    initialParams.currentPage = Number(params.page);
    initialParams.search = '';
    return initialParams;
  }
  return initialParams;
};

//установка сортировки из параметров
const setSort = (sortParams: string): SortTypeBy => {
  const sort = sortBy.find((obj) => obj.sortParams === sortParams);
  if (sort !== undefined) {
    return sort;
  } else {
    return { name: 'популярности', sortParams: 'rating' };
  }
};
