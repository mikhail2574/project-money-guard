const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  modal: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModal(state) {
      state.modal = true;
    },
    hideModal(state) {
      state.modal = false;
    },
  },
});

export const { hideModal, showModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
