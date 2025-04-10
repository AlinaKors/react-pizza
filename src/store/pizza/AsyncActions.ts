import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ReturnDara } from './types';

//достаем пиццы с бэка
export const fetchByPizzas = createAsyncThunk<ReturnDara, URLSearchParams | string>(
  'pizzas/fetchByPizzas',
  async (searchParams) => {
    const { data } = await axios.get(
      `https://31f63cbf290f51e3.mokky.dev/pizzas?limit=4&${searchParams}`,
    );
    return data;
  },
);
