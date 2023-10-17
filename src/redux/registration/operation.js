import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

export const taskApi = axios.create({
  baseURL: 'https://wallet.goit.ua/api/',
});

const setToken = token => {
  taskApi.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

const clearToken = () => {
  taskApi.defaults.headers.common['Authorization'] = '';
};

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (credentials, thunkApi) => {
    try {
      const { data } = await taskApi.post('auth/sign-up', credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      if (error.response) {
        if (error.response.status === 409) {
          toast.error('We already have that email', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          });
        }
        return thunkApi.rejectWithValue(error.message);
      }
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await taskApi.post('auth/sign-in', credentials);
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
      await taskApi.delete('auth/sign-out');
      clearToken();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const savedToken = thunkAPI.getState();
    const persistedToken = savedToken.auth.token;
    if (!persistedToken) return thunkAPI.rejectWithValue('Token is not exist');

    try {
      setToken(persistedToken);
      const { data } = await taskApi.get('users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getInfo = createAsyncThunk(
  'auth/refresh/info',
  async (_, thunkAPI) => {
    const savedToken = thunkAPI.getState();
    const persistedToken = savedToken.auth.token;
    if (!persistedToken) return thunkAPI.rejectWithValue('Token is not exist');

    try {
      setToken(persistedToken);
      const { data } = await taskApi.get('users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
