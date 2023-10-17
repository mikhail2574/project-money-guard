import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ButtonStyle = styled.button`
  width: 280px;
  height: 50px;
  border: none;
  border-radius: 20px;
  padding: 5px 10px;
  background-color: blue;
  margin: 10px 15px;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
  text-transform: uppercase;
  color: var(--white);
  cursor: pointer;
  box-shadow: 1px 6px 6px 0px rgba(0, 0, 0, 0.2);
  @media screen and (min-width: 768px) {
    width: 300px;
  }
  // =============== кнопка + add transaction ==========
  &.add {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: linear-gradient(
      135deg,
      rgb(249, 177, 4) 12%,
      rgb(172, 43, 169) 70%,
      rgb(153, 50, 225)
    );
    color: var(--white);
    &:hover {
      background-color: var(--white);
      color: var(--text-button);
      box-shadow: 1px 1px 7px 3px var(--transp-20);
      width: 45px;
      height: 45px;
    }
  }
  // =============== кнопка orange ==========
  &.login {
    background: linear-gradient(
      135deg,
      rgb(249, 177, 4) 12%,
      rgb(172, 43, 169) 70%,
      rgb(153, 50, 225)
    );
    color: var(--white);
    &:hover {
      background-color: var(--white);
      color: var(--text-button);
      box-shadow: 1px 6px 6px 0px var(--transp-20);
      transform: scale(1.01);
    }
  }
  // =============== кнопка white ==========
  &.cancel {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: var(--white);
    color: var(--text-button);
    &:hover {
      transform: scale(1.01);
      font-weight: 600;
      box-shadow: 1px 6px 6px 0px var(--transp-20);
    }
  }
`;
// ========== Біла кнопка для посилання NavLink ================

export const StyledLink = styled(NavLink)`
  width: 280px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 20px;
  padding: 5px 10px;
  margin: 10px 15px;
  margin-bottom: 98px;
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
    margin-bottom: 80px;
  }
`;
