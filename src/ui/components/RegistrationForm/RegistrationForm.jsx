import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { registerThunk } from 'redux/registration/operation';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import PasswordStrengthBar from 'react-password-strength-bar';
import { selectIsLogin } from 'redux/registration/selectors';
import { Navigate } from 'react-router';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IoMdPerson } from 'react-icons/io';
import { MdEmail, MdHttps } from 'react-icons/md';
import Logotip from '../../icons/logo.svg';

export const RegisterForm = () => {
  // validation
  const validationScheme = yup.object({
    username: yup.string().required('You must enter smt..'),
    email: yup
      .string()
      .email('Please, enter an email')
      .required('You must enter smt..'),
    password: yup
      .string()
      .min(6, 'Must be at least 6 characters')
      .max(12, 'Must be 12 characters or less')
      .required('Required'),
    confirmPass: yup
      .string()
      .oneOf([yup.ref('password')], 'Incorrect password confirmation'),
  });

  // useForm and dispatch
  const {
    register,
    handleSubmit,
    unregister,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(validationScheme),
  });
  const dispatch = useDispatch();

  // для zxcStrengthBar
  const myInputValue = watch('password');

  // submit
  const submit = data => {
    unregister('confirmPass');
    dispatch(registerThunk(data));
  };

  // заготовка под Navigation
  const isLogin = useSelector(selectIsLogin);
  if (isLogin) {
    return <Navigate to="DashboardPage" />;
  }

  return (
    <>
      <Form onSubmit={handleSubmit(submit)}>
        <TitleDiv>
          <img src={Logotip} alt="logo" width="36px" height="36px" />
          <Title>Money Guard</Title>
        </TitleDiv>
        <Label>
          <InputDiv>
            <SvgDiv>
              <SvgPerson />
            </SvgDiv>

            <Input {...register('username')} placeholder="Name" />
          </InputDiv>
          <div>
            <Error>{errors?.username && errors.username.message}</Error>
          </div>
        </Label>
        <Label>
          <InputDiv>
            <SvgDiv>
              <SvgEmail />
            </SvgDiv>

            <Input {...register('email')} placeholder="E-mail" />
          </InputDiv>
          <div>
            <Error>{errors?.email && errors.email.message}</Error>
          </div>
        </Label>
        <Label>
          <InputDiv>
            <SvgDiv>
              <SvgPass />
            </SvgDiv>

            <Input {...register('password')} placeholder="Password" />
          </InputDiv>
          <div>
            <Error>{errors?.password && errors.password.message}</Error>
          </div>
        </Label>
        <Label>
          <InputDiv>
            <SvgDiv>
              <SvgPass />
            </SvgDiv>
            <Input
              {...register('confirmPass', { shouldUnregister: true })}
              placeholder="Confirm password"
            />
          </InputDiv>
          <div>
            <Error>{errors?.confirmPass && errors.confirmPass.message}</Error>
          </div>
        </Label>
        <PasswordBar password={myInputValue} />
        <RegisterButton type="submit" value="Create account">
          <RegButtonText>Register</RegButtonText>
        </RegisterButton>
      </Form>
      <Link to="/">
        <LogInButton>
          <LogInButtText>Log-in</LogInButtText>
        </LogInButton>
      </Link>
    </>
  );
};

// Rosie Simpson
// Rosie1@mqw.ua

const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  color: var(--white);
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const PasswordBar = styled(PasswordStrengthBar)`
  width: 100%;
`;

const RegisterButton = styled.button`
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

const LogInButton = styled.button`
  width: 300px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #fcfcfc;
  box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);
`;

const RegButtonText = styled.p`
  color: var(--white);
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 1.8px;
  text-transform: uppercase;
`;

const LogInButtText = styled.p`
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

const Form = styled.form`
  width: 100%;
  margin-bottom: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

const Label = styled.label`
  width: 100%;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid var(--transp-40);
  line-height: 1.5;
  font-size: 18px;
  font-weight: 400;
  color: black;
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

const InputDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 0;
`;

const Error = styled.p`
  width: 100%;
  color: red;
`;

const SvgDiv = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
`;

const SvgPerson = styled(IoMdPerson)`
  width: 24px;
  height: 24px;
  color: rgba(255, 255, 255, 0.6);
`;

const SvgEmail = styled(MdEmail)`
  width: 24px;
  height: 24px;
  color: rgba(255, 255, 255, 0.6);
`;

const SvgPass = styled(MdHttps)`
  width: 24px;
  height: 24px;
  color: rgba(255, 255, 255, 0.6);
`;
