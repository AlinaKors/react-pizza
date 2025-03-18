import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchByPizzas = createAsyncThunk('pizzas/fetchByPizzas', async (searchParams) => {
  const { data } = await axios.get(
    `https://31f63cbf290f51e3.mokky.dev/pizzas?limit=4&${searchParams}`,
  );
  return data;
});

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState: {
    items: [],
    addProducts: [],
    meta: [],
    status: 'loading',
  },
  reducers: {
    setPizzaItems: (state, action) => {
      state.items = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchByPizzas.pending, (state) => {
      console.log('идет отправка запроса');
      state.items = [];
      state.meta = [];
      state.status = 'loading';
    });

    builder.addCase(fetchByPizzas.fulfilled, (state, action) => {
      console.log('success');
      state.items = action.payload.items;
      state.meta = action.payload.meta;
      state.status = 'success';
    });

    builder.addCase(fetchByPizzas.rejected, (state) => {
      state.items = [];
      state.meta = [];
      state.status = 'error';
      console.log('Не удалось загрузить пиццы :с');
    });
  },
});

export const { setPizzaItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
