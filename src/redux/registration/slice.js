const { createSlice, isAnyOf } = require('@reduxjs/toolkit');
const {
  registerThunk,
  refreshThunk,
  loginThunk,
  logoutThunk,
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
      .addCase(logoutThunk.fulfilled, state => {
        return (state = initialState);
      })
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.isRefresh = false;
        state.isLogin = true;

        if (!payload.balance) {
          state.user.balance = 0;
        } else {
          state.user.balance = payload.balance;
        }
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
          state.isLogin = true;
          if (!payload.balance) {
            state.user.balance = 0;
          } else {
            state.user.balance = payload.balance;
          }
        }
      );
  },
});

export const authReducer = slice.reducer;
