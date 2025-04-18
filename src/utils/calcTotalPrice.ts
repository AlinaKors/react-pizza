import { ItemType } from '../store/cart/types';

export const calcTotalPrice = (items: ItemType[]): number => {
  const totalPrice = items.reduce((sum, current) => sum + current.count * current.price, 0);
  return totalPrice;
};
