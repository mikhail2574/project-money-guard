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
  },
  token: null,
  isLogin: false,
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
        state.isRefresh = false;
        state.user.name = payload.name;
        state.user.email = payload.email;
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
          state.isLogin = true;
        }
      );
  },
});

export const authReducer = slice.reducer;
