import React from 'react';
import { Currency } from 'ui/components/dashboard/Currency/Currency';
import { StyledCarrencyWrap } from './CurrencyTab.styled';
import { useMyContext } from 'context/useMyContext';
import { Modal } from 'ui/components/Modal/Modal';
import { Logout } from 'ui/components/dashboard/Logout/Logout';

const CurrencyTab = () => {
  const { isOpen, typeModal } = useMyContext();
  return (
    <StyledCarrencyWrap>
      <Currency />
      {isOpen ? <Modal>{typeModal === 'exit' ? <Logout /> : ''}</Modal> : null}
    </StyledCarrencyWrap>
  );
};

export default CurrencyTab;
