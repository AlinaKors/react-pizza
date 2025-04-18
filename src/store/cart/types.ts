// export type ProductType = {
//   key: string;
//   item: ItemType;
// };

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

type CountItems = {
  count: number;
  id: number;
};

export interface ICartSliceState {
  totalItems: number;
  items: ItemType[];
  countItems: CountItems[];
}
