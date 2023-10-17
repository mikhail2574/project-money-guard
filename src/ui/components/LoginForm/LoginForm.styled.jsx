import styled from 'styled-components';
import loginMobile from 'ui/images/login/GradientLogo.png';
import loginTablet from 'ui/images/login/login-tablet.webp';
import loginDesktop from 'ui/images/login/login-desktop.webp';
import loginTablet2x from 'ui/images/login/login-tablet@2x.webp';
import loginDesktop2x from 'ui/images/login/login-desktop@2x.webp';

export const StyledLoginSection = styled.section`
  width: 100dvw;
  height: 100dvh;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: var(--bg);
  background-image: url(${loginMobile});
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
export const StyledFormWrap = styled.div`
  height: 100%;
  @media screen and (min-width: 768px) {
    width: 533px;
    height: 570px;
    backdrop-filter: blur(50px);
    box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
  }
`;
export const StyledForm = styled.form`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.1);

  .boxLogin {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    outline: none;
    padding-left: 11px;
    padding-top: 8px;
    padding-bottom: 8px;
    margin: 20px 0;
    border: 1px;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    background-color: transparent;
    border-bottom: 1px solid rgb(255 255 255 / 0.6);
    color: rgb(255 255 255 / 0.6);
    @media screen and (min-width: 768px) {
      width: 409px;
    }
  }
  .boxLogin > input {
    color: rgb(255 255 255 / 0.6);
    background-color: transparent;
    border: none;
  }
  .boxLogin > input::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
  .iconEmail {
    margin-right: 15px;
    font-size: 24px;
    color: rgb(255 255 255 / 0.6);
  }
  .iconPass {
    margin-right: 15px;
    font-size: 24px;
    color: rgb(255 255 255 / 0.6);
  }
`;

export const StyledTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 97px;
  .logoText {
    font-size: 19px;
    color: var(--white);
    @media screen and (min-width: 768px) {
      font-size: 27px;
    }
  }
  @media screen and (min-width: 768px) {
    font-size: 27px;
    padding-top: 80px;
  }
`;
export const StyledLogo = styled.img`
  width: 25px;
  @media screen and (min-width: 768px) {
    width: 36px;
  }
`;
