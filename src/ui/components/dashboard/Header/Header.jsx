import React from 'react'; // { useRef }
// import { useNavigate } from 'react-router-dom';
import logout from 'ui/icons/logout.svg';
import logo from 'ui/icons/logo-second.svg';
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
  // const navigate = useNavigate();
  // const { useDispatch, useSelector } = require('react-redux');
  // const dispatch = useDispatch();
  // const buttonRef = useRef(null);

  // const user = useSelector(selectUser);
  // const username = user.email ? user.email.split('@')[0] : '';

  // const goToHome = () => {
  //   navigate('/home');
  // };
  return (
    <>
      <HeaderContainer>
        {/* <Logolink onClick={goToHome} ref={buttonRef}> */}
        <Logolink>
          <Logo src={logo} alt="logotype" />
          <LogoName>Money Guard</LogoName>
        </Logolink>
        <ExitCont>
          <UserName title="Hello :)">Username</UserName>
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
      {/* {modalType === 'modal/toggleLogOutModal' && isModalOpen && (
        <Modal children={<Logout />} />
      )} */}
    </>
  );
};
