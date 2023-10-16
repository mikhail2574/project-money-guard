import styled from 'styled-components';
import bdTabl from 'ui/images/register/register-desktop.webp';
import bd2 from 'ui/images/register/register-desktop@2x.webp';
import bd from 'ui/images/login/GradientLogo.png';

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
    background-image: url(${bdTabl});
  }

  @media only screen and (-webkit-min-device-pixel-ratio: 2),
    /* для Safari,
    Safari IOS */ only screen and (min-resolution: 192dpi),
    /* для IE 10,
    IE 11,
    Opera Mini */ only screen and (min-resolution: 2dppx) {
    /* для нормальных браузеров */
    background-image: url(${bd2});
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
