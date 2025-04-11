export type PizzaInfoProps = {
  imageUrl: string;
  title: string;
};

type TypeChoice = {
  typeInput: number;
  setTypeInput: (index: number) => void;
  sizeInput: number;
  setSizeInput: (index: number) => void;
};

export type PizzaTypeProps = {
  id: number;
  types: number[];
  sizes: number[];
} & TypeChoice;

type ItemType = {
  sizes: number[];
  title: string;
  types: number[];
  id: number;
  imageUrl: string;
};

export type PizzaItemProps = {
  prices: { [key: string]: number };
} & ItemType;

export type PizzaPriceProps = {
  price: number;
  handleAddToCart: () => void;
  countAdd: number;
};

export type PizzaItemComponentProps = ItemType & TypeChoice & PizzaPriceProps;
