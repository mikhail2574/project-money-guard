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
import { useMyContext } from 'context/useMyContext';
import { Modal } from 'ui/components/Modal/Modal';
import { Logout } from '../Logout/Logout';

export const Header = () => {
<<<<<<< HEAD
  const { isOpen, open } = useMyContext();
  // const navigate = useNavigate();
  // const { useDispatch, useSelector } = require('react-redux');
  // const dispatch = useDispatch();
  // const buttonRef = useRef(null);
=======
  const userEmail = useSelector(state => state.auth.user.email);
  const navigate = useNavigate();
>>>>>>> main

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
<<<<<<< HEAD
          <UserName title="Hello :)">Username</UserName>
          <ExitBtn id="exit" type="button" onClick={() => open()} title="quit">
=======
          <UserName title="Hello :)">{username}</UserName>
          <ExitBtn
            id="exit"
            type="button"
            // onClick={() => dispatch(toggleLogOutModal())}
            title="quit"
          >
>>>>>>> main
            <img src={logout} alt="logout" />
            <TextExit>Exit</TextExit>
          </ExitBtn>
        </ExitCont>
      </HeaderContainer>
<<<<<<< HEAD
      {/* {modalType === 'modal/toggleLogOutModal' && isModalOpen && (
        <Modal children={<Logout />} />
      )} */}
      {isOpen ? (
        <Modal>
          <Logout />
        </Modal>
      ) : null}
=======
>>>>>>> main
    </>
  );
};
