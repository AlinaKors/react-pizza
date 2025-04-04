import { createSlice } from '@reduxjs/toolkit';
import { fetchByPizzas } from './AsyncActions';
import { IPizzaSliceState, Status } from './types';

const initialState: IPizzaSliceState = {
  items: [],
  meta: null,
  status: Status.LOADING,
};

//состояние пицц
const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setPizzaItems: (state, action) => {
      state.items = action.payload;
    },
  },

  extraReducers: (builder) => {
    //загрузка пицц
    builder.addCase(fetchByPizzas.pending, (state) => {
      state.items = [];
      state.meta = null;
      state.status = Status.LOADING;
    });
    //успешная загрузка пицц
    builder.addCase(fetchByPizzas.fulfilled, (state, action) => {
      state.items = action.payload.items;
      state.meta = action.payload.meta;
      state.status = Status.SUCCESS;
    });
    //ошибка при загрузке пицц
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
