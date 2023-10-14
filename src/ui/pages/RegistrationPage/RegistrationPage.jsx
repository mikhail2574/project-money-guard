import { RegisterForm } from 'ui/components/RegistrationForm/RegistrationForm';
import { ContentContainer, MainContainer } from './RegistrationPage.styled';
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
