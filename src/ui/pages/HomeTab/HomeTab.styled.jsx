import styled from 'styled-components';
import bgHome from 'ui/images/mainGradient.png';

export const MainContainer = styled.main`
  width: 100dvw;
  height: 100dvh;
  background-color: var(--bg);
  background-image: url(${bgHome});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;