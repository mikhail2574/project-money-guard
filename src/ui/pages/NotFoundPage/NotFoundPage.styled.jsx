import styled from 'styled-components';
import loginDesktop from '../../images/login/login-desktop.jpg';

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
  }
`;
export const NotFoundPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
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
