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

const persistConfig = {
  key: 'userToken',
  version: 1,
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, authReducer);
export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    transactions: transactionsReducer,
    modal: modalReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export let persistor = persistStore(store);
