const { useSelector } = require('react-redux');

export const selectIsOpen = state => state.modal.modal;
