import { css } from 'styled-components';
import loginDesktop from '../images/login/login-desktop.jpg';
import loginDesktop2x from '../images/login/login-desktop@2x.jpg';
import registerDesktop from '../images/register/register-desktop.jpg';
import registerDesktop2x from '../images/register/register-desktop@2x.jpg';

const bgDesktop = props => (props.isRegister ? registerDesktop : loginDesktop);
const bgDesktop2x = props =>
  props.isRegister ? registerDesktop2x : loginDesktop2x;

export const mobileStyles = css`
  @media screen and (max-width: 767px) {
  }
`;

export const tabletStyles = css`
  @media screen and (min-width: 768px) and (max-width: 1279px) {
  }
`;

export const desktopStyles = css`
  @media screen and (min-width: 1280px) {
    background-image: url(${bgDesktop});
    @media screen and (min-device-pixel-ratio: 2),
      screen and (-webkit-min-device-pixel-ratio: 2),
      screen and (-o-min-device-pixel-ratio: 1/2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
      background-image: url(${bgDesktop2x});
    }
  }
`;
