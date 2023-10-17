import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchTransactions,
  addTransaction,
  editTransaction,
  deleteTransaction,
  fetchCategories,
  fetchSummary,
} from './operations';

const initialState = {
  transactions: [],
  categories: [],
  summary: {},
  // currentAmount: 0, //? Better to use users/current to get info
  isLoading: false,
  error: null,
};

const slice = createSlice({
  name: 'transactions',
  initialState,
  extraReducers: builder =>
    builder
      //* ========================= Main Success =========================
      .addCase(fetchTransactions.fulfilled, (state, { payload }) => {
        state.transactions = payload;
      })
      .addCase(addTransaction.fulfilled, (state, { payload }) => {
        state.transactions.push(payload);
      })
      .addCase(editTransaction.fulfilled, (state, { payload }) => {
        const index = state.transactions.findIndex(
          item => item.id === payload.id
        );
        state.transactions.splice(index, 1, payload);
        //state.balance = payload.balanceAfter; // ????????
      })
      .addCase(deleteTransaction.fulfilled, (state, { payload }) => {
        state.transactions = state.transactions.filter(
          item => item.id !== payload
        );
      })
      .addCase(fetchCategories.fulfilled, (state, { payload }) => {
        state.categories = payload;
      })
      .addCase(fetchSummary.fulfilled, (state, { payload }) => {
        state.summary = payload;
      })
      //* ========================= Aux Success =========================
      .addMatcher(
        isAnyOf(
          fetchTransactions.fulfilled,
          addTransaction.fulfilled,
          editTransaction.fulfilled,
          deleteTransaction.fulfilled,
          fetchCategories.fulfilled,
          fetchSummary.fulfilled
        ),
        state => {
          state.isLoading = false;
        }
      )
      //* ========================= Pending =========================
      .addMatcher(
        isAnyOf(
          fetchTransactions.pending,
          addTransaction.pending,
          editTransaction.pending,
          deleteTransaction.pending,
          fetchCategories.pending,
          fetchSummary.pending
        ),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      //* ========================= Reject =========================
      .addMatcher(
        isAnyOf(
          fetchTransactions.rejected,
          addTransaction.rejected,
          editTransaction.rejected,
          deleteTransaction.rejected,
          fetchCategories.rejected,
          fetchSummary.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      ),
});

export default slice.reducer;
