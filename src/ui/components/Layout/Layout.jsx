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
        <div className="container">
          <LeftMenu>
            <Navigation />
            <Balance />
            <Currency />
          </LeftMenu>
          {children}
        </div>
      </MainContainer>
    </>
  );
};

export default Layout;
