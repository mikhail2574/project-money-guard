import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutThunk } from 'redux/registration/operation';
import Logos from 'ui/icons/logo.svg';
import {
  LogoutContainer,
  LogoStyled,
  Logo,
  LogoTitle,
  Question,
  ButtonsContainer,
} from './Logout.styled';
import Button from 'ui/components/home/shared/Button';

export const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutThunk());
  };

  return (
    <LogoutContainer>
      <LogoStyled>
        <Logo src={Logos} alt="Guard Money" />
        <LogoTitle>Money Guard</LogoTitle>
      </LogoStyled>
      <Question>Are you sure you want to log out?</Question>
      <ButtonsContainer>
        <Button variant="login" onClick={handleLogout}>
          Logout
        </Button>
        <Button variant="cancel">Cancel</Button>
      </ButtonsContainer>
    </LogoutContainer>
  );
};
