import { configureStore } from '@reduxjs/toolkit';
import transactionsReducer from './transactions/transactionsSlice';

export const store = configureStore({
  reducer: { transactions: transactionsReducer },
});
