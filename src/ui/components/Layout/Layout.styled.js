import styled from 'styled-components';

export const MobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

export const MobileChildren = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const DesktopChildren = styled.div`
  @media screen and (max-width: 1279px) {
    display: none;
  }
`;
