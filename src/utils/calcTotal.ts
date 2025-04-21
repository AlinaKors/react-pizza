import { ItemType } from '../store/cart/types';

export const calcTotal = (items: ItemType[]): { totalPrice: number; totalItems: number } => {
  const { totalPrice, totalItems } = items.reduce(
    (acc, item) => {
      acc.totalPrice += item.count * item.price;
      acc.totalItems += item.count;
      return acc;
    },
    { totalPrice: 0, totalItems: 0 },
  );

  return { totalPrice, totalItems };
};
