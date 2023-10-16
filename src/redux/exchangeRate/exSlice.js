const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  EUR: 0,
  USD: 0,
  selectedCurrency: 'UAH',
  newArray: null,
};
const currencyData = JSON.parse(localStorage.getItem('currencyData'));

const slice = createSlice({
  name: 'exRate',
  initialState,
  reducers: {
    setEUR(state, { payload }) {
      state.EUR = currencyData[1].rateBuy;
      state.EUR = (payload / state.EUR).toFixed(2);
    },
    setUSD(state, { payload }) {
      state.USD = currencyData[0].rateBuy;
      state.USD = (payload / state.USD).toFixed(2);
    },
    setCurrency(state, { payload }) {
      state.selectedCurrency = payload;
    },
    test(state, { payload }) {
      state.newArray = payload.map(object => {
        switch (currencyData) {
          case 'EUR':
            return { ...object, sum: object.sum * currencyData[0].rateBuy };
          case 'USD':
            return { ...object, sum: object.sum * currencyData[1].rateBuy };
          default:
            return { ...object };
        }
      });
    },
  },
});

export const exSliceReducer = slice.reducer;
export const { setEUR, setUSD, setCurrency } = slice.actions;
