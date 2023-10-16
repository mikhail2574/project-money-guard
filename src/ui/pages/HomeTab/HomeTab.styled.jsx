import styled from 'styled-components';
import bgHome from 'ui/images/mainGradient.png';

export const MainContainer = styled.main`
  display: flex;
  height: 720px;
  background-color: var(--bg);
  background-image: url(${bgHome});

  background-size: cover;
  background-repeat: no-repeat;
`;

export const LeftMenu = styled.div`
  position: relative;
  max-width: 336px;
  height: 100%;
  margin: auto;

  @media screen and (min-width: 768px) {
    margin: 0;
  }
  @media screen and (min-width: 1280px) {
    max-width: 480px;
    border-right: 2px solid var(--transp-60);
    filter: drop-shadow(1px 4px 1px rgba(0, 0, 0, 0.25));
  }
`;
