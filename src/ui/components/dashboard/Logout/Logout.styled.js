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
`;

export const LogoutBtn = styled.button`
  width: 280px;
  height: 50px;
  color: var(--white);
  border-radius: 20px;
  font-size: 18px;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  background: linear-gradient(
    97deg,
    rgba(255, 199, 39, 1) -16.42%,
    rgba(158, 64, 186, 1) 97.04%,
    rgba(112, 0, 255, 1) 150.71%
  );
  box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);

  @media screen and (min-width: 768px) {
    width: 300px;
    &:hover,
    :focus {
      transform: scale(1.1);
    }
  }
`;

export const CancelBtn = styled.button`
  width: 280px;
  height: 50px;
  color: var(--text-button);
  border-radius: 20px;
  font-size: 18px;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  background-color: var(--white);
  box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);
  border: none;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 300px;
    &:hover,
    :focus {
      transform: scale(1.1);
    }
  }
`;
