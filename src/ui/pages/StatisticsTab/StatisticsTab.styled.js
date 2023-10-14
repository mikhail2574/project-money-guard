import styled from 'styled-components';

export const StatSection = styled.div`
  color: var(--white);
  margin-top: 40px;
  width: 320px;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  max-width: 100%;
  padding: 0px 20px;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    margin: 0 0 0 -444px;
    padding: 0 32px;
  }
  @media screen and (min-width: 1280px) {
    margin: 40px 0 0 0;
    padding: 0;
  }
`;

// export const RightSideStatWrapper = styled.div`
//   @media screen and (max-width: 767px) {
//   }
//   @media screen and (min-width: 768px) and (max-width: 1279px) {
//     display: flex;
//   }
//   @media screen and (min-width: 1280px) {
//     display: flex;
//   }
// `;

export const LeftSideWrapper = styled.div`
  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    margin-right: 68px;
  }
  @media screen and (min-width: 1280px) {
    margin-right: 32px;
    margin-left: 69px;
  }
`;

export const DashboardWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 32px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    margin-top: 10px;
    flex-direction: row;
  }
  @media screen and (min-width: 1280px) {
    flex-direction: row;
    gap: 32px;
  }
`;

export const DataWrapper = styled.div`
  width: 100%;
  padding-bottom: 45px;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 336px;
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const TitleStyled = styled.h1`
  color: var(--white, #fbfbfb);
  text-align: start;
  font-family: Poppins;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
`;
