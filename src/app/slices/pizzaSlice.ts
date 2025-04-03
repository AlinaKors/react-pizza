import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchByPizzas = createAsyncThunk<ReturnDara, URLSearchParams>(
  'pizzas/fetchByPizzas',
  async (searchParams: URLSearchParams) => {
    const { data } = await axios.get(
      `https://31f63cbf290f51e3.mokky.dev/pizzas?limit=4&${searchParams}`,
    );
    return data;
  },
);

enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

type Price = {
  26?: number;
  30?: number;
  40?: number;
};

type ReturnDara = {
  items: Item[];
  meta: Meta;
};

type Item = {
  category: number;
  id: number;
  imageUrl: string;
  price: number;
  prices: Price;
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
} | null;

interface IPizzaSliceState {
  items: Item[];
  meta: Meta;
  status: Status;
}

const initialState: IPizzaSliceState = {
  items: [],
  meta: null,
  status: Status.LOADING,
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
      state.meta = null;
      state.status = Status.LOADING;
    });

    builder.addCase(fetchByPizzas.fulfilled, (state, action) => {
      state.items = action.payload.items;
      state.meta = action.payload.meta;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchByPizzas.rejected, (state) => {
      state.items = [];
      state.meta = null;
      state.status = Status.ERROR;
      console.log('Не удалось загрузить пиццы :с');
    });
  },
});

export const { setPizzaItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
