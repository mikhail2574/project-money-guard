import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const taskApi = axios.create({
  baseURL: 'https://wallet.goit.ua',
});
// Utility to add JWT
const setToken = token => {
  taskApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};
// Utility to remove JWT
const clearToken = token => {
  taskApi.defaults.headers.common.Authorization = '';
};
/*
 * POST @ /users/signup
 * body: { name, email, password }
 */
export const registerThunk = createAsyncThunk(
  'auth/register',
  async (credentials, thunkApi) => {
    try {
      const { data } = await taskApi.post('/api/auth/sign-up', credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      if (error.response) {
        if (error.response.status === 409) {
          alert('We already have than email');
        }
        return thunkApi.rejectWithValue(error.message);
      }
    }
  }
);
/*
 * POST @ /users/login
 * body: { email, password }
 */
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
/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 */

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
