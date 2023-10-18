import React, { useEffect, useState } from 'react';
import { Header } from '../dashboard/Header/Header';
import { MainContainer, LeftMenu } from 'ui/pages/HomeTab/HomeTab.styled';
import { Navigation } from '../dashboard/Navigation/Navigation';
import { Balance } from '../dashboard/Balance/Balance';
import { Currency } from '../dashboard/Currency/Currency';
import {
  DesktopChildren,
  MobileChildren,
  MobileContainer,
} from './Layout.styled';

const Layout = ({ children }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const detectedSize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', detectedSize);
    return () => {
      window.removeEventListener('resize', detectedSize);
    };
  }, []);

  const isMobileView = screenWidth <= 767;
  const isTabletView = screenWidth <= 1279;

  return (
    <>
      <Header />
      <MainContainer>
        {isMobileView ? (
          <MobileContainer>
            <Navigation />
            <MobileChildren>{children}</MobileChildren>
          </MobileContainer>
        ) : (
          <>
            <LeftMenu className="container">
              <Navigation />
              <Balance />
              <Currency />
              {isTabletView ? children : null}
            </LeftMenu>
            <DesktopChildren>{children}</DesktopChildren>
          </>
        )}
      </MainContainer>
    </>
  );
};

export default Layout;
