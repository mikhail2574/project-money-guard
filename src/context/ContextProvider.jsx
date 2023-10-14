import { createContext } from 'react';

import { useModal } from '../ui/hooks/useModal';

export const MyContext = createContext();

export const ContextProvider = ({ children }) => {
  const { isOpen, open, close, typeModal, setTypeModal } = useModal();

  const value = {
    isOpen,
    open,
    close,
    typeModal,
    setTypeModal,
  };
  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};
