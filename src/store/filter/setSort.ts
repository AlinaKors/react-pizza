import { sortBy } from '../../utils/initialParams';
import { SortTypeBy } from './types';

//установка сортировки из параметров
export const setSort = (sortParams: string): SortTypeBy => {
  const sort = sortBy.find((obj) => obj.sortParams === sortParams);
  if (sort !== undefined) {
    return sort;
  } else {
    return { name: 'популярности', sortParams: 'rating' };
  }
};
