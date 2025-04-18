import { configureStore } from '@reduxjs/toolkit';
import filter from './filter/slice';
import pizza from './pizza/slice';
import cart from './cart/slice';
import { useDispatch } from 'react-redux';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { pizzasApi } from './pizza/AsyncActions';

const persistConfig = {
  key: 'cart',
  storage,
};

//отдельный reducer для корзины, для сохранение состояния при перезагрузке страницы
const persistedReducerCart = persistReducer(persistConfig, cart);

export const store = configureStore({
  reducer: {
    filter,
    pizza,
    persistedReducerCart,
    [pizzasApi.reducerPath]: pizzasApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(pizzasApi.middleware),
});

export const persister = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
