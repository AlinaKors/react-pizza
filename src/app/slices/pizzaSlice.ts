import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchByPizzas = createAsyncThunk('pizzas/fetchByPizzas', async (searchParams) => {
  const { data } = await axios.get(
    `https://31f63cbf290f51e3.mokky.dev/pizzas?limit=4&${searchParams}`,
  );
  return data;
});

type Price = {
  26?: number;
  30?: number;
  40?: number;
};

type Item = {
  category: number;
  id: number;
  imageUrl: string;
  price: Price;
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
};

interface IPizzaSliceState {
  items: Item[];
  meta: Meta[];
  status: 'loading' | 'success' | 'error';
}

const initialState: IPizzaSliceState = {
  items: [],
  meta: [],
  status: 'loading',
};

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setPizzaItems: (state, action) => {
      state.items = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchByPizzas.pending, (state) => {
      state.items = [];
      state.meta = [];
      state.status = 'loading';
    });

    builder.addCase(fetchByPizzas.fulfilled, (state, action) => {
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
