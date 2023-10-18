import { taskApi } from 'redux/registration/operation';
import { createAsyncThunk } from '@reduxjs/toolkit';

//* ========================= Transactions =========================

export const fetchTransactions = createAsyncThunk(
  'fetchTransactions',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await taskApi.get('transactions');
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const addTransaction = createAsyncThunk(
  'addTransaction',
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await taskApi.post('transactions', body);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const editTransaction = createAsyncThunk(
  'editTransaction',
  async (body, { rejectWithValue }) => {
    try {
      const { id, type, amount, comment, categoryId, transactionDate } = body;
      const payload = { type, amount, comment, categoryId, transactionDate };
      const { data } = await taskApi.patch(`transactions/${id}`, payload);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const deleteTransaction = createAsyncThunk(
  'deleteTransaction',
  async (id, { rejectWithValue }) => {
    try {
      await taskApi.delete(`transactions/${id}`);
      return id;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

//* ========================= Statistics =========================

export const fetchCategories = createAsyncThunk(
  'fetchCategories',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await taskApi.get('transaction-categories');
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const fetchSummary = createAsyncThunk(
  'fetchSummary',
  async ({ month, year }, { rejectWithValue }) => {
    try {
      const { data } = await taskApi.get('transactions-summary', {
        params: {
          month,
          year,
        },
      });
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
