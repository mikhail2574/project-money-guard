import React from 'react';
import { useNavigate } from 'react-router-dom';
import logout from 'ui/icons/logout.svg';
import logo from 'ui/icons/logo-second.svg';
import { useSelector } from 'react-redux';
import {
  HeaderBg,
  HeaderContainer,
  Logolink,
  Logo,
  LogoName,
  ExitCont,
  UserName,
  ExitBtn,
  TextExit,
} from './Header.styled';
import { useMyContext } from 'context/useMyContext';
import { ExRateChanger } from '../ExRateChanger/ExRateChanger';

export const Header = () => {
  const { open, setTypeModal } = useMyContext();
  const userEmail = useSelector(state => state.auth.user.email);
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/home');
  };
  const username = userEmail ? userEmail.split('@')[0] : '';

  const handleOnClick = () => {
    open();
    setTypeModal('exit');
  };

  return (
    <HeaderBg>
      <HeaderContainer className="container">
        <Logolink onClick={goToHome}>
          <Logo src={logo} alt="logotype" />
          <LogoName>Money Guard</LogoName>
        </Logolink>
        <ExitCont>
          <ExRateChanger />
          <UserName title="Hello :)">{username}</UserName>
          <ExitBtn id="exit" type="button" onClick={handleOnClick} title="quit">
            <img src={logout} alt="logout" />
            <TextExit>Exit</TextExit>
          </ExitBtn>
        </ExitCont>
      </HeaderContainer>
    </HeaderBg>
  );
};
