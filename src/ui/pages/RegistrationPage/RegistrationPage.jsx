import styled from 'styled-components';
import { RegisterForm } from 'ui/components/RegistrationForm/RegistrationForm';
import bd from 'ui/images/register/register-desktop.jpg';
// import { desktopStyles } from 'styles/breakpoints';

export const Register = () => {
  return (
    <>
      <MainContainer>
        <ContentContainer>
          <RegisterForm />
        </ContentContainer>
      </MainContainer>
    </>
  );
};

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-image: url(${bd});
  background-color: tomato;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 666;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 23px 20px;
  flex-shrink: 0;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  @media screen and (min-width: 426px) {
    width: 533px;
    height: auto;
    padding: 40px 62px;
    box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
  }
`;
