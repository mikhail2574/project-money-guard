import styled from 'styled-components';
import bgHome from 'ui/images/mainGradient.png';

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  background-color: var(--bg);
  background-image: url(${bgHome});
  min-height: calc(100vh - 70px);
  background-attachment: fixed;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    flex-direction: row;
  }

  @media screen and (min-width: 1280px) {
    max-width: 100% !important;
    margin-left: 0;
    flex-direction: row;
  }
`;

export const LeftMenu = styled.div`
  position: relative;
  max-width: 336px;
  min-height: 100%;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    min-width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }
  @media screen and (min-width: 1280px) {
    min-width: 480px;
    margin: 0;
    border-right: 2px solid var(--transp-60);
    filter: drop-shadow(1px 4px 1px rgba(0, 0, 0, 0.25));
  }
`;
