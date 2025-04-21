import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DeleteItem, ICartSliceState, ItemType } from './types';

const initialState: ICartSliceState = {
  totalItems: 0,
  items: [],
  countItems: {},
};

//состояние корзины
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    //добавление в корзину
    addProduct: (state, action: PayloadAction<ItemType>) => {
      const { key, id } = action.payload;
      const findProduct = state.items.find((item) => item.key === key);

      //Добавление пиццы по ее id
      state.countItems[id] = state.countItems[id] + 1 || 1;
      //Добавление пиццы по ее id и типу\размеру
      state.items.length && findProduct ? findProduct.count++ : state.items.push(action.payload);
      //Добавление общего числа элементов
      state.totalItems++;
    },

    //удаление с корзины одной единицы позиции
    deleteProduct: (state, action: PayloadAction<DeleteItem>) => {
      const { key, id } = action.payload;
      const findProduct = state.items.find((item) => item.key === key);

      //Удаление пиццы по ее id
      state.countItems[id] = state.countItems[id] - 1 || 1;
      //Удаление пиццы по ее id и типу\размеру
      findProduct && findProduct.count !== 1
        ? findProduct.count--
        : (state.items = state.items.filter((item) => item.key !== key));
      //Удаление общего числа элементов
      state.totalItems--;
    },

    //удаление с корзины целой позиции
    deleteAllProduct: (state, action: PayloadAction<DeleteItem>) => {
      const { key, id, count } = action.payload;

      //Удаление пиццы по ее id
      state.items = state.items.filter((item) => item.key !== key);
      //Удаление пиццы по ее id и типу\размеру
      delete state.countItems[id];
      //Удаление общего числа элементов
      state.totalItems -= count;
    },

    //очистка корзины
    clearCart: () => initialState,
  },
});

export const { addProduct, deleteProduct, clearCart, deleteAllProduct } = cartSlice.actions;

export default cartSlice.reducer;
