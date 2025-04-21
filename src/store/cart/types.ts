export type ItemType = {
  count: number;
  id: number;
  imageUrl: string;
  price: number;
  size: number;
  title: string;
  type: number;
  key: string;
};

export type DeleteItem = {
  key: string;
  id: number;
  price: number;
  count: number;
};

export interface ICartSliceState {
  totalItems: number;
  items: ItemType[];
  countItems: Record<number, number>;
}
