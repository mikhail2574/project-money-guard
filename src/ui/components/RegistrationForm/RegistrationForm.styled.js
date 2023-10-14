import { IoMdPerson } from 'react-icons/io';
import { MdEmail, MdHttps } from 'react-icons/md';
import PasswordStrengthBar from 'react-password-strength-bar';
import styled from 'styled-components';

export const EyeDiv = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  color: whitesmoke;

  &&:active {
    color: purple;
  }
`;

export const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  color: var(--white);
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const PasswordBar = styled(PasswordStrengthBar)`
  width: 100%;
`;

export const RegisterButton = styled.button`
  width: 300px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 20px;
  background: var(
    --button-gradient,
    linear-gradient(97deg, #ffc727 -16.42%, #9e40ba 97.04%, #7000ff 150.71%)
  );
  box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);
`;

export const LogInButton = styled.button`
  width: 300px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #fcfcfc;
  box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);
  position: relative;
`;

export const RegButtonText = styled.p`
  color: var(--white);
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 1.8px;
  text-transform: uppercase;
`;

export const LogInButtText = styled.p`
  color: var(--button-text);

  text-align: center;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 1.8px;
  text-transform: uppercase;
`;

export const Form = styled.form`
  width: 100%;
  margin-bottom: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

export const Label = styled.label`
  width: 100%;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid var(--transp-40);
  line-height: 1.5;
  font-size: 18px;
  font-weight: 400;
  color: whitesmoke;
  padding: 0 35px;
  margin: 0;
  position: relative;

  &::placeholder {
    font-size: 18px;
    line-height: 1.5;
    color: var(--transp-60);
  }

  &:focus,
  &:hover,
  &:active,
  &:visited {
    outline: none;
  }

  &:focus::placeholder,
  &:active::placeholder {
    transform: translateY(-100%);
    opacity: 1;
  }
`;

export const InputDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 0;
`;

export const Error = styled.p`
  width: 100%;
  color: red;
`;

export const SvgDiv = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
`;

export const SvgPerson = styled(IoMdPerson)`
  width: 24px;
  height: 24px;
  color: rgba(255, 255, 255, 0.6);
`;

export const SvgEmail = styled(MdEmail)`
  width: 24px;
  height: 24px;
  color: rgba(255, 255, 255, 0.6);
`;

export const SvgPass = styled(MdHttps)`
  width: 24px;
  height: 24px;
  color: rgba(255, 255, 255, 0.6);
`;
