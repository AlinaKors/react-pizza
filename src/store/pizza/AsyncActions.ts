import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ReturnDara } from './types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

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

// export const pizzasApi = createApi({
//   reducerPath: 'pizzasApi',
//   baseQuery: fetchBaseQuery({ baseUrl: 'https://31f63cbf290f51e3.mokky.dev/pizzas?limit=4' }),
//   endpoints: (builder) => ({
//     getPizzas: builder.query<ReturnDara, void>({
//       query: () => `&category=*&sortBy=rating&page=1&title=*`,
//     }),
//     getPizzasByParams: builder.query<ReturnDara, URLSearchParams | string>({
//       query: (searchParams) => `&${searchParams}`,
//     }),
//   }),
// });

// // Export hooks for usage in functional components, which are
// // auto-generated based on the defined endpoints
// export const { useGetPizzasQuery, useGetPizzasByParamsQuery } = pizzasApi;
