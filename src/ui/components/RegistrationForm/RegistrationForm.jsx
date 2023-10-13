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
        <Label>
          <IoMdPerson />
          <Input {...register('username')} placeholder="Name" />
          <Error>{errors?.username && errors.username.message}</Error>
        </Label>
        <Label>
          <Input {...register('email')} placeholder="E-mail" />
          <Error>{errors?.email && errors.email.message}</Error>
        </Label>
        <Label>
          <Input {...register('password')} placeholder="Password" />
          <Error>{errors?.password && errors.password.message}</Error>
        </Label>
        <Label>
          <Input
            {...register('confirmPass', { shouldUnregister: true })}
            placeholder="Confirm password"
          />
          <Error>{errors?.confirmPass && errors.confirmPass.message}</Error>
        </Label>
        <PasswordStrengthBar password={myInputValue} />
        <button type="submit" value="Create account">
          Register
        </button>
      </Form>
      <Link to="/">
        <button>Log-in</button>
      </Link>
    </>
  );
};

// Rosie Simpson
// Rosie1@mqw.ua

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
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
    color: black;
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

const Error = styled.span`
  color: red;
  font-size: 14px;
  margin-top: 2px;
`;
