import React from 'react';
import { Currency } from 'ui/components/dashboard/Currency/Currency';
import { StyledCarrencyWrap } from './CurrencyTab.styled';

const CurrencyTab = () => {
  return (
    <StyledCarrencyWrap>
      <Currency />
    </StyledCarrencyWrap>
  );
};

export default CurrencyTab;
