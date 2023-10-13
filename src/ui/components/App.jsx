import React from 'react';
import { Register } from 'ui/pages/RegistrationPage/RegistrationPage';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Register />
    </div>
  );
};
