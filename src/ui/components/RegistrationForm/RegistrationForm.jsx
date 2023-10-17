import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { registerThunk } from 'redux/registration/operation';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { selectIsLogin } from 'redux/registration/selectors';
import { Navigate } from 'react-router';
import { Link } from 'react-router-dom';
import Logotip from '../../icons/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import {
  Error,
  EyeDiv,
  Form,
  Input,
  InputDiv,
  Label,
  LogInButton,
  PasswordBar,
  SvgDiv,
  SvgEmail,
  SvgPass,
  SvgPerson,
  Title,
  TitleDiv,
} from './RegistrationForm.styled';
import Button from '../shared/Button';
import { StyledLogo } from '../LoginForm/LoginForm.styled';

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

  //  for passVisibility

  const eye = <FontAwesomeIcon icon={faEye} />;
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

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

  //  Navigation
  const isLogin = useSelector(selectIsLogin);

  if (isLogin) {
    return <Navigate to="/home" />;
  }

  return (
    <>
      <Form onSubmit={handleSubmit(submit)}>
        <TitleDiv>
          <StyledLogo src={Logotip} alt="logo" />
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

            <Input
              type={passwordShown ? 'text' : 'password'}
              {...register('password')}
              placeholder="Password"
            />
            <EyeDiv>
              <i onClick={togglePasswordVisiblity}>{eye}</i>
            </EyeDiv>
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
              type={passwordShown ? 'text' : 'password'}
              {...register('confirmPass', { shouldUnregister: true })}
              placeholder="Confirm password"
            />
          </InputDiv>
          <div>
            <Error>{errors?.confirmPass && errors.confirmPass.message}</Error>
          </div>
        </Label>
        <PasswordBar password={myInputValue} />
        <Button type="submit" variant="login">
          Register
        </Button>
      </Form>
      <Link to="/">
        <LogInButton>Log in</LogInButton>
      </Link>
    </>
  );
};
