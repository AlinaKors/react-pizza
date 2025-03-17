import { createSlice } from '@reduxjs/toolkit';

const pizzaSlice = createSlice({
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

export const { setPizzaItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
