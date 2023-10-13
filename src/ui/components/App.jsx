import React from 'react';
import { AddButton } from './Modal/AddButton';
import { Modal } from './Modal/Modal';
import { useModal } from '../hooks/useModal';

export const App = () => {
  const { isOpen } = useModal();

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
      {isOpen ? <Modal /> : null}
    </div>
  );
};
