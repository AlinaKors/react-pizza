import { createSlice } from '@reduxjs/toolkit';

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState: {
    items: [],
    addProducts: [],
  },
  reducers: {
    setPizzaItems: (state, action) => {
      state.items = action.payload;
    },
  },
});

// Функция действия генерируется на каждую функцию релюсера(reducer), определённую в createSlice
export const { setPizzaItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
