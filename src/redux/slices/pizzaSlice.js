import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPizzas = createAsyncThunk('pizzas/fetchPizzasStatus', async (params) => {
  const { data } = await axios.get(`https://31f63cbf290f51e3.mokky.dev/pizzas?limit=4&${params}`);
  return data;
});

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState: {
    items: [],
    totalPage: 1,
    status: '',
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzas.pending, (state) => {
        state.status = 'loading';
        state.items = [];
        state.totalPage = [];
      })
      .addCase(fetchPizzas.fulfilled, (state, action) => {
        state.items = action.payload.items;
        state.totalPage = action.payload.meta.total_pages;
        console.log('Total', action.payload.meta.total_pages);
        state.status = 'success';
      })
      .addCase(fetchPizzas.rejected, (state, action) => {
        state.status = 'error';
        state.items = [];
        state.totalPage = 0;
        console.log('Не удалось загрузить пиццы :с');
        console.error(action.error.message);
      });
  },
});

export default pizzaSlice.reducer;
