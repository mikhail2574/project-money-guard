import { RegisterForm } from 'ui/components/RegistrationForm/RegistrationForm';
import { ContentContainer, MainContainer } from './RegistrationPage.styled';

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
