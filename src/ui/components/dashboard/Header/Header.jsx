import React from 'react';
import { useNavigate } from 'react-router-dom';
import logout from 'ui/icons/logout.svg';
import logo from 'ui/icons/logo-second.svg';
import { useSelector } from 'react-redux';
import {
  HeaderContainer,
  Logolink,
  Logo,
  LogoName,
  ExitCont,
  UserName,
  ExitBtn,
  TextExit,
} from './Header.styled';

export const Header = () => {
  const userEmail = useSelector(state => state.auth.user.email);
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/home');
  };
  const username = userEmail ? userEmail.split('@')[0] : '';

  return (
    <>
      <HeaderContainer>
        <Logolink onClick={goToHome}>
          <Logo src={logo} alt="logotype" />
          <LogoName>Money Guard</LogoName>
        </Logolink>
        <ExitCont>
          <UserName title="Hello :)">{username}</UserName>
          <ExitBtn
            id="exit"
            type="button"
            // onClick={() => dispatch(toggleLogOutModal())}
            title="quit"
          >
            <img src={logout} alt="logout" />
            <TextExit>Exit</TextExit>
          </ExitBtn>
        </ExitCont>
      </HeaderContainer>
    </>
  );
};
