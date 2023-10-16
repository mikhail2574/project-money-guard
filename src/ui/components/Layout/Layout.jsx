import React from 'react';
import { Header } from '../dashboard/Header/Header';
import { MainContainer, LeftMenu } from 'ui/pages/HomeTab/HomeTab.styled';
import { Navigation } from '../dashboard/Navigation/Navigation';
import { Balance } from '../dashboard/Balance/Balance';
import { Currency } from '../dashboard/Currency/Currency';

const Layout = ({ children }) => {
  return (
    <>
      <Header />

      <MainContainer>
        <LeftMenu>
          <Navigation />
          <Balance />
          <Currency />
        </LeftMenu>
        {children}
      </MainContainer>
    </>
  );
};

export default Layout;
