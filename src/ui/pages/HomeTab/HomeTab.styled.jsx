import styled from 'styled-components';
import bgHome from 'ui/images/mainGradient.png';

export const MainContainer = styled.main`
  height: 720px;
  background-color: var(--bg);
  background-image: url(${bgHome});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const LeftMenu = styled.div`
  max-width: 480px;
  height: 100%;
  border-right: 2px solid rgba(255, 255, 255, 0.6);
`;
