import { initialParams } from '../../utils/initialParams';
import { setSort } from './setSort';
import { IFilterSliceState, SortType } from './types';

//установка начальных фильтров даже при обновлении
export const getInitialState = (paramsQuery: URLSearchParams): IFilterSliceState => {
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
