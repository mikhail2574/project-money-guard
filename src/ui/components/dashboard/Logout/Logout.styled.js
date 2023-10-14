import styled from 'styled-components';

export const LogoutContainer = styled.div`
  display: flex;
  gap: 52px;
  flex-direction: column;
  background-color: grey;
  align-items: center;
  padding: 60px 0;
`;

export const LogoStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const Logo = styled.img`
  width: 36px;
  height: 36px;
`;

export const LogoTitle = styled.p`
  color: var(--white);
  font-size: 27px;
`;

export const Question = styled.p`
  font-size: 18px;
  color: var(--white);

  @media screen and (max-width: 767px) {
    text-align: center;
    padding: 0 53px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;

  /* & > button {
    margin: 0 !important;
  } */
`;
