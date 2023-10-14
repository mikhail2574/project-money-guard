import React from 'react';

import { ToastContainer } from 'react-toastify';
import { Register } from 'ui/pages/RegistrationPage/RegistrationPage';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <div>
      <Register />
      <ToastContainer />
    </div>
  );
};
