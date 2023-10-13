import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://wallet.goit.ua/api/';

//* ========================= Transactions =========================

export const fetchTransactions = createAsyncThunk(
  'fetchTransactions',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('transactions');
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
      const { data } = await axios.post('transactions', body);
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
      const { data } = await axios.patch(`transactions/${body.id}`, body);
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
      await axios.delete(`transactions/${id}`);
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
      const { data } = await axios.get('transaction-categories');
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
      const { data } = await axios.get('transactions-summary', {
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
