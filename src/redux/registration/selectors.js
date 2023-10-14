export const selectName = state => state.auth.user.name;
export const selectEmail = state => state.auth.user.email;
export const selectToken = state => state.auth.token;
export const selectIsLogin = state => state.auth.isLogin;
export const selectIsRefresh = state => state.auth.isRefresh;
