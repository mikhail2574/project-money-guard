import styled from 'styled-components';

export const StatSection = styled.div`
  color: var(--white);
  min-width: 280px;
  max-width: 100%;
  margin: 0 auto;
  margin: 40px auto 0;
  padding: 0px 20px;

  @media screen and (max-width: 767px) {
    padding: 0;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    margin: 20px 0 0 0;
    padding: 0;
  }
  @media screen and (min-width: 1280px) {
    margin: 32px 0 0 0;
    padding-right: 16px;
    padding-left: 69px;
  }
`;

export const StyledTitle = styled.h2`
  display: inline-block;
  font-size: 30px;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const StatsWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 32px;
  }
`;

export const DashboardWrapper = styled.div`
  /* display: flex; */
  /* width: 100%; */
  /* flex-direction: column; */
  /* align-items: center; */
  /* gap: 20px; */
  /* margin-top: 32px; */
  /* margin-bottom: 20px; */

  /* @media screen and (min-width: 768px) and (max-width: 1279px) {
    margin-top: 10px;
    flex-direction: row;
  }
  @media screen and (min-width: 1280px) {
    flex-direction: row;
    gap: 32px;
  } */
`;

// export const DataWrapper = styled.div`
//   width: 100%;
//   padding-bottom: 45px;

//   @media screen and (min-width: 768px) and (max-width: 1279px) {
//     width: 336px;
//   }
//   @media screen and (min-width: 1280px) {
//   }
// `;
