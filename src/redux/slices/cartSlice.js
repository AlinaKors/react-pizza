import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    totalPrice: 0,
    totalItems: 0,
    items: [],
    countItems: [],
  },
  reducers: {
    addProduct: (state, action) => {
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
    deleteProduct: (state, action) => {
      state.totalItems--;
      state.totalPrice -= action.payload.price;

      const findProduct = state.items.find((item) => item.key === action.payload.key);

      findProduct.item.count !== 1
        ? findProduct.item.count--
        : (state.items = state.items.filter((item) => item.key !== action.payload.key));

      const findCount = state.countItems.find((item) => item.id === action.payload.id);
      findCount.count === 1
        ? (state.countItems = state.countItems.filter((item) => item.id !== action.payload.id))
        : (findCount.count -= action.payload.count);
    },
    deleteAllProduct: (state, action) => {
      state.items = state.items.filter((item) => item.key !== action.payload.key);
      const findCount = state.countItems.find((item) => item.id === action.payload.id);

      findCount.count === action.payload.count
        ? (state.countItems = state.countItems.filter((item) => item.id !== action.payload.id))
        : (findCount.count -= action.payload.count);
      state.totalItems -= action.payload.count;
      state.totalPrice -= action.payload.price * action.payload.count;
    },
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
