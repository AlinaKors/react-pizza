import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    totalPrice: 0,
    items: [],
  },
  reducers: {
    addProduct: (state, action) => {
      const findProduct = state.items.find(
        (item) => Object.keys(item)[0] === Object.keys(action.payload)[0],
      );

      console.log(findProduct);

      state.items.length && findProduct
        ? findProduct[Object.keys(action.payload)[0]].count++
        : state.items.push(action.payload);
    },
    deleteProduct: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

// Функция действия генерируется на каждую функцию релюсера(reducer), определённую в createSlice
export const { addProduct } = cartSlice.actions;

export default cartSlice.reducer;
