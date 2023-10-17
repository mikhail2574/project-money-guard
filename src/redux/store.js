import { configureStore } from '@reduxjs/toolkit';
import transactionsReducer from './transactions/transactionsSlice';
import { authReducer } from './registration/slice';
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
import { modalReducer } from './modal/modalSlice';
import { exSliceReducer } from './exchangeRate/exSlice';

const persistConfig = {
  key: 'userToken',
  version: 1,
  storage,
  whitelist: ['token', 'USD', 'EUR', 'selectedCurrency'],
};

const persistedReducer = persistReducer(persistConfig, authReducer);
const persistedReducerEx = persistReducer(persistConfig, exSliceReducer);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    transactions: transactionsReducer,
    modal: modalReducer,
    exRate: persistedReducerEx,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export let persistor = persistStore(store);
