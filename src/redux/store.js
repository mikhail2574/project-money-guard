import { configureStore } from '@reduxjs/toolkit';
import transactionsReducer from './transactions/transactionsSlice';
import { authReducer } from './registration/slice';

export const store = configureStore({
  reducer: { auth: authReducer, transactions: transactionsReducer },
});
