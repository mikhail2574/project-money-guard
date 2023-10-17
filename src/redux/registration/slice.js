import { addTransaction } from 'redux/transactions/operations';

const { createSlice, isAnyOf } = require('@reduxjs/toolkit');
const {
  registerThunk,
  refreshThunk,
  loginThunk,
  logoutThunk,
  getInfo,
} = require('./operation');

const initialState = {
  user: {
    name: '',
    email: '',
    balance: 0,
  },
  token: null,
  isLogin: false,
  isRefresh: false,
  isError: false,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(addTransaction.fulfilled, (state, { payload }) => {
        state.user.balance = payload.balanceAfter;
      })
      .addCase(getInfo.fulfilled, (state, { payload }) => {
        state.user.balance = payload.balance;
      })
      .addCase(getInfo.rejected, (state, { payload }) => {
        state.user.isError = payload.error;
      })
      .addCase(logoutThunk.fulfilled, state => {
        return (state = initialState);
      })
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.user.balance = payload.balance;
        state.isRefresh = false;
        state.isLogin = true;
      })
      .addCase(refreshThunk.pending, state => {
        state.isRefresh = true;
      })
      .addCase(refreshThunk.rejected, state => {
        state.isRefresh = false;
      })
      .addMatcher(
        isAnyOf(registerThunk.fulfilled, loginThunk.fulfilled),
        (state, { payload }) => {
          state.token = payload.token;
          state.user.name = payload.user.username;
          state.user.email = payload.user.email;
          state.user.balance = payload.user.balance;
          state.isLogin = true;
        }
      );
  },
});

export const authReducer = slice.reducer;
