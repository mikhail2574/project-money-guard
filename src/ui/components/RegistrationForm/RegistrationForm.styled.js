import { IoMdPerson } from 'react-icons/io';
import { MdEmail, MdHttps } from 'react-icons/md';
import PasswordStrengthBar from 'react-password-strength-bar';
import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`;

export const Label = styled.label`
  width: 100%;
  margin-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
`;
export const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  color: var(--white);
  font-size: 19px;
  font-weight: 400;
  @media screen and (min-width: 768px) {
    font-size: 27px;
  }
`;

export const PasswordBar = styled(PasswordStrengthBar)`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
`;
export const EyeDiv = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  color: rgba(255, 255, 255, 0.6);

  &&:active {
    color: purple;
  }
`;

export const LogInButton = styled.button`
  position: relative;
  flex-shrink: 0;
  width: 280px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 20px;
  padding: 5px 10px;
  margin-top: 10px;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;

  background-color: var(--white);
  color: var(--text-button);
  box-shadow: 1px 6px 6px 0px rgba(0, 0, 0, 0.2);
  &:hover {
    transform: scale(1.01);
    font-weight: 600;
    box-shadow: 1px 6px 6px 0px var(--transp-20);
  }
  @media screen and (min-width: 768px) {
    width: 300px;
  }
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
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill::first-line {
    color: var(--transp-60) !important;
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
