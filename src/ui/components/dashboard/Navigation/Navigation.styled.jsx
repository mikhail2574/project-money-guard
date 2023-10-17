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
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 4px;
    background-color: var(--transp-20);
    @media screen and (min-width: 768px) {
      width: 24px;
      height: 24px;
      margin-right: 20px;
    }
  }
  .boxIconDollar {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 4px;
    background-color: var(--transp-20);
    @media screen and (min-width: 768px) {
      display: none;
    }
  }

  &.active {
    font-weight: 700;
    border-radius: 4px;
    background-color: var(--purple);
    @media screen and (min-width: 768px) {
      background-color: transparent;
    }
  }

  & .icon {
    color: rgba(255, 255, 255, 0.4);
    width: 100%;
    height: 100%;
    padding: 4px;
  }
  &.active .icon {
    color: var(--white);
    background-color: var(--purple);
    border-radius: 4px;
  }
  & .iconRevers {
    transform: scale(-1, 1);
  }
  & .dollar {
    width: 100%;
    height: 100%;
    padding: 4px;

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
