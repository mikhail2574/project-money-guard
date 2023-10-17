import {
  StyledForm,
  StyledFormWrap,
  StyledLoginSection,
  StyledLogo,
  StyledTitle,
} from './LoginForm.styled';

import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { loginThunk } from 'redux/registration/operation';
import { selectIsLogin } from 'redux/registration/selectors';
import { toast } from 'react-toastify';
import { StyledLink } from '../shared/Button.styled';
import Button from '../shared/Button';
import { MdEmail, MdHttps } from 'react-icons/md';
import logoImg from 'ui/icons/logo.svg';

const LoginForm = () => {
  const isLoggedIn = useSelector(selectIsLogin);
  const { handleSubmit, register } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const submit = data => {
    dispatch(loginThunk(data))
      .unwrap()
      .then(res => {
        toast.success(`Welcome, ${res.user.email.split('@')[0]}!`);

        navigate(location.state?.from ?? '/home');
      })
      .catch(() => toast.warn('Data is not valid! Try again!'));
  };
  if (isLoggedIn) {
    return <Navigate to="/home" />;
  }
  return (
    <StyledLoginSection>
      <StyledFormWrap>
        <StyledForm onSubmit={handleSubmit(submit)}>
          <StyledTitle>
            <StyledLogo src={logoImg} alt="logoImg" />
            <span className="logoText">Money Guard</span>
          </StyledTitle>
          <label htmlFor="email" className="boxLogin">
            <MdEmail className="iconEmail" />
            <input
              type="email"
              name="email"
              title="Enter an email"
              placeholder="Email"
              minLength={3}
              required
              {...register('email')}
            />
          </label>

          <label htmlFor="password" className="boxLogin">
            <MdHttps className="iconPass" />
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              title="Enter 6-12 symbols"
              minLength={6}
              maxLength={12}
              required
              {...register('password')}
            />
          </label>

          <Button type="submit" variant="login">
            Log in
          </Button>
          <StyledLink to="/register">register</StyledLink>
        </StyledForm>
      </StyledFormWrap>
    </StyledLoginSection>
  );
};

export default LoginForm;
