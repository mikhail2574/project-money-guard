import styled from 'styled-components';

export const HeaderBg = styled.div`
  background: linear-gradient(270deg, #2e1746 3.2%, #2e225f 99.98%);
  box-shadow: 0px 4px 40px 0px rgba(0, 0, 0, 0.25),
    0px -3px 2px 0px rgba(0, 0, 0, 0.1) inset;

  @media screen and (max-width: 767px) {
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    padding-bottom: 65px;
  }
`;

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;

  @media screen and (max-width: 767px) {
    margin: 0 auto;
    top: 0;
    opacity: 0.9;
    width: 100%;
    z-index: 1;
    position: fixed;
    background: linear-gradient(270deg, #2e1746 3.2%, #2e225f 99.98%);
  }
  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1280px) {
    padding-left: 16px;
    padding-right: 16px;
    max-width: 100%;
  }
`;

export const Logolink = styled.a`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 12px 0;
  background: rgba(255, 255, 255, 0);
  cursor: pointer;

  @media (max-width: 767px) {
    padding: 16px 0;
  }
`;

export const Logo = styled.img`
  width: 17px;
  height: 17px;

  @media screen and (min-width: 768px) {
    width: 23px;
    height: 23px;
  }
`;

export const LogoName = styled.p`
  color: var(--white);
  font-size: 13px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const ExitCont = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const UserName = styled.p`
  display: flex;
  align-items: center;
  color: var(--transp-60);
  font-size: 18px;
  margin: 0;

  @media (min-width: 768px) {
    height: 30px;
    border-right: 1px solid var(--transp-60);
    padding-right: 12px;
    margin-right: 4px;
  }
`;

export const ExitBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;
  background-color: transparent;
  padding: 20px 0;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    &:hover,
    :focus {
      transform: scale(1.1);
    }
  }
`;

export const TextExit = styled.p`
  font-size: 18px;
  margin-left: 8px;
  color: var(--transp-60);

  @media screen and (max-width: 767px) {
    display: none;
  }
`;
