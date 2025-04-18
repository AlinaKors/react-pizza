import { ReturnDara } from './types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

//достаем пиццы с бэка
export const pizzasApi = createApi({
  reducerPath: 'pizzasApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://31f63cbf290f51e3.mokky.dev',
  }),
  endpoints: (builder) => ({
    getPizzas: builder.query<ReturnDara, string>({
      query: (params) => {
        const queryString =
          params.length === 0
            ? '/pizzas?limit=4&category=*&sortBy=rating&page=1&title=*'
            : `/pizzas?limit=4&${params.toString()}`;
        return queryString;
      },
    }),
  }),
});

export const { useGetPizzasQuery } = pizzasApi;
