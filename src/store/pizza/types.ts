export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

type Price = {
  26?: number;
  30?: number;
  40?: number;
};

export type ReturnDara = {
  items: Item[];
  meta: Meta;
};

type Item = {
  category: number;
  id: number;
  imageUrl: string;
  price: number;
  prices: Price;
  rating: number;
  sizes: number[];
  title: string;
  types: number[];
};

type Meta = {
  current_page: number;
  per_page: number;
  remaining_count: number;
  total_items: number;
  total_pages: number;
} | null;

export interface IPizzaSliceState {
  items: Item[];
  meta: Meta;
  status: Status;
}
