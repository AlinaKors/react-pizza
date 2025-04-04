import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DeleteItem, ICartSliceState, ProductType } from './types';

const initialState: ICartSliceState = {
  totalPrice: 0,
  totalItems: 0,
  items: [],
  countItems: [],
};

//состояние корзины
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    //добавление в корзину
    addProduct: (state, action: PayloadAction<ProductType>) => {
      state.totalItems++;
      state.totalPrice += action.payload.item.price;

      const findProduct = state.items.find((item) => item.key === action.payload.key);

      state.items.length && findProduct
        ? findProduct.item.count++
        : state.items.push(action.payload);

      const findCount = state.countItems.find((item) => item.id === action.payload.item.id);
      findCount
        ? findCount.count++
        : state.countItems.push({ id: action.payload.item.id, count: 1 });
    },
    //удаление с корзины одной единицы позиции
    deleteProduct: (state, action: PayloadAction<DeleteItem>) => {
      state.totalItems--;
      state.totalPrice -= action.payload.price;

      const findProduct = state.items.find((item) => item.key === action.payload.key);

      findProduct && findProduct.item.count !== 1
        ? findProduct.item.count--
        : (state.items = state.items.filter((item) => item.key !== action.payload.key));

      const findCount = state.countItems.find((item) => item.id === action.payload.id);
      findCount && findCount.count !== 1
        ? (findCount.count -= action.payload.count)
        : (state.countItems = state.countItems.filter((item) => item.id !== action.payload.id));
    },
    //удаление с корзины целой позиции
    deleteAllProduct: (state, action: PayloadAction<DeleteItem>) => {
      state.items = state.items.filter((item) => item.key !== action.payload.key);
      const findCount = state.countItems.find((item) => item.id === action.payload.id);

      findCount && findCount.count !== action.payload.count
        ? (findCount.count -= action.payload.count)
        : (state.countItems = state.countItems.filter((item) => item.id !== action.payload.id));
      state.totalItems -= action.payload.count;
      state.totalPrice -= action.payload.price * action.payload.count;
    },
    //очистка корзины
    clearCart: (state) => {
      state.items = [];
      state.totalItems = 0;
      state.totalPrice = 0;
      state.countItems = [];
    },
  },
});

export const { addProduct, deleteProduct, clearCart, deleteAllProduct } = cartSlice.actions;

export default cartSlice.reducer;
