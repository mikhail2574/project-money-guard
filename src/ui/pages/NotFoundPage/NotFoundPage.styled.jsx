import styled from 'styled-components';
import loginTablet from 'ui/images/login/login-tablet.webp';
import loginDesktop from 'ui/images/login/login-desktop.webp';
import loginTablet2x from 'ui/images/login/login-tablet@2x.webp';
import loginDesktop2x from 'ui/images/login/login-desktop@2x.webp';

export const NotFoundPageSection = styled.section`
  width: 100dvw;
  height: 100dvh;
  background-image: url(${loginDesktop});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #1e0646;
  display: block;
  text-align: center;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    display: flex;
    background-image: url(${loginTablet});
    @media screen and (min-device-pixel-ratio: 2),
      screen and (-webkit-min-device-pixel-ratio: 2),
      screen and (-o-min-device-pixel-ratio: 1/2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
      background-image: url(${loginTablet2x});
    }
  }
  @media screen and (min-width: 1280px) {
    display: flex;
    background-image: url(${loginDesktop});
    @media screen and (min-device-pixel-ratio: 2),
      screen and (-webkit-min-device-pixel-ratio: 2),
      screen and (-o-min-device-pixel-ratio: 1/2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
      background-image: url(${loginDesktop2x});
    }
  }
`;
export const NotFoundPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  padding-top: 40px;
  h2 {
    font-size: 120px;
    margin: 0;

    text-shadow: #fc0 1px 0 10px;
  }
  .link404 {
    text-decoration: underline;
    font-weight: bold;
    color: rgb(255 255 255 / 0.6);
    padding: 10px;
  }
`;
