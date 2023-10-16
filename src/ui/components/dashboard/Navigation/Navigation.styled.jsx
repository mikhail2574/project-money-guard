import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNav = styled.nav`
  padding: 12px 15px;
  .list {
    display: flex;
    justify-content: center;
    gap: 32px;
    @media screen and (min-width: 768px) {
      flex-direction: column;
      gap: 12px 20px;
    }
  }
  @media screen and (min-width: 768px) {
    padding-top: 40px;
    padding-bottom: 28px;
    padding-left: 0;
    padding-right: 0;
  }
  @media screen and (min-width: 1280px) {
    padding-left: 16px;
  }
`;

export const StyledLinkHome = styled(NavLink)`
  color: var(--white);
  font-size: 18px;
  display: flex;
  align-items: center;
  .boxIcon {
    width: 40px;
    height: 40px;
    border-radius: 4px;
    background-color: var(--transp-20);
    @media screen and (min-width: 768px) {
      width: 22px;
      height: 22px;
      margin-right: 20px;
    }
  }
  .boxIconDollar {
    width: 40px;
    height: 40px;
    border-radius: 4px;
    background-color: var(--transp-20);
    @media screen and (min-width: 768px) {
      display: none;
    }
  }

  &.active {
    font-weight: 700;
    background-color: var(--purple);
    @media screen and (min-width: 768px) {
      background-color: transparent;
    }
  }

  & .icon {
    color: rgba(255, 255, 255, 0.4);
    width: 37px;
    height: 37px;
    padding-left: 2px;
    @media screen and (min-width: 768px) {
      width: 20px;
      height: 20px;
      padding-left: 0;
    }
  }
  &.active .icon {
    color: var(--white);
    background-color: var(--purple);
  }
  & .iconRevers {
    transform: scale(-1, 1);
  }
  & .dollar {
    width: 34px;
    height: 34px;
    padding-top: 5px;
    padding-left: 5px;
    @media screen and (min-width: 768px) {
      display: none;
    }
  }
`;

export const StyledSpan = styled.span`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`;
