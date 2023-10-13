import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const taskApi = axios.create({
  baseURL: 'https://wallet.goit.ua',
});

const setToken = token => {
  taskApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearToken = token => {
  taskApi.defaults.headers.common.Authorization = '';
};

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (credentials, thunkApi) => {
    try {
      const { data } = await taskApi.post('/api/auth/sign-up', credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await taskApi.post('/api/auth/sign-in', credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await taskApi.delete('/api/auth/sign-out');
      clearToken();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// нужен персист для токена

export const refreshThunk = createAsyncThunk(
  'refresh',
  async (credentials, thunkAPI) => {
    const savedToken = thunkAPI.getState().auth.token;
    if (!savedToken) return thunkAPI.rejectWithValue('Token is not exist');

    try {
      setToken(savedToken);
      const { data } = await taskApi.get('/api/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
