import React from 'react';
<<<<<<< Updated upstream

import { ToastContainer } from 'react-toastify';
import { Register } from 'ui/pages/RegistrationPage/RegistrationPage';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <div>
      <Register />
      <ToastContainer />
=======
import { AddButton } from './Modal/AddButton';
import { Modal } from './Modal/Modal';

import { useMyContext } from 'context/useMyContext';
import { AddTransactionForm } from './home/modalWindows/AddTransactionForm/AddTransactionForm';

export const App = () => {
  const { isOpen } = useMyContext();

  return (
    <div
    // style={{
    //   height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   color: '#010101',
    // }}
    >
      <AddButton />
      {isOpen ? (
        <Modal>
          <AddTransactionForm />
        </Modal>
      ) : null}
>>>>>>> Stashed changes
    </div>
  );
};
