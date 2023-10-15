import styled from 'styled-components';

import bd from 'ui/images/register/register-mobile.webp';

export const StyledOverlay = styled.div`
  z-index: 300;
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  place-content: center;
  @media screen and (max-width: 767px) {
    margin-top: 60px;
    background-image: url(${bd});
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #1e0646;
  }
  @media screen and (min-width: 768px) {
    display: grid;
    background: rgba(34, 13, 91, 0.23);
    backdrop-filter: blur(3.5px);
  }
`;

export const StyledContent = styled.div`
  @media screen and (min-width: 768px) {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 540px;
    background-image: url(${bd});
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 8px;
    box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
  }
`;

export const StyledButton = styled.span`
  display: none;
  @media screen and (min-width: 768px) {
    display: inline-block;
  }
  position: absolute;
  cursor: pointer;
  top: 20px;
  right: 20px;
  z-index: 5;
`;
