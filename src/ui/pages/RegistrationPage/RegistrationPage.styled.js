import styled from 'styled-components';
import bd from 'ui/images/login/GradientLogo.png';

import tabbg from 'ui/images/register/register-tablet.webp';
import tabbg2x from 'ui/images/register/register-tablet@2x.webp';
import deskbg from 'ui/images/register/register-desktop.webp';
import deskbg2x from 'ui/images/register/register-desktop@2x.webp';

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: var(--bg);
  background-image: url(${bd});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 666;
  @media screen and (min-width: 768px) {
    background-image: url(${tabbg});
    @media only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      background-image: url(${tabbg2x});
    }
  }
  @media screen and (min-width: 1280px) {
    background-image: url(${deskbg});
    @media only screen and (-webkit-min-device-pixel-ratio: 2),
      only screen and (min-resolution: 192dpi),
      only screen and (min-resolution: 2dppx) {
      background-image: url(${deskbg2x});
    }
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 23px 20px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;

  @media screen and (min-width: 768px) {
    width: 533px;
    height: auto;
    padding: 40px 62px;
    box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(50px);
  }
`;
