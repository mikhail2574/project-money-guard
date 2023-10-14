import { useState } from 'react';

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [typeModal, setTypeModal] = useState('');
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return { open, close, isOpen, typeModal, setTypeModal };
};
