import React from 'react';
import { Header } from '../dashboard/Header/Header';
import { MainContainer, LeftMenu } from 'ui/pages/HomeTab/HomeTab.styled';
import { Navigation } from '../dashboard/Navigation/Navigation';
import { Balance } from '../dashboard/Balance/Balance';
import { Currency } from '../dashboard/Currency/Currency';
import { MobileContainer } from './Layout.styled';

const Layout = ({ children }) => {
  const isMobile = window.innerWidth <= 767;

  return (
    <>
      <Header />
      <MainContainer>
        {isMobile ? (
          <MobileContainer>
            <Navigation />
            <div>{children}</div>
          </MobileContainer>
        ) : (
          <>
            <LeftMenu className="container">
              <Navigation />
              <Balance />
              <Currency />
            </LeftMenu>
            {children}
          </>
        )}
      </MainContainer>
    </>
  );
};

export default Layout;
