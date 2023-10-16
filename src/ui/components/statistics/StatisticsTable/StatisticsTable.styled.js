import styled from 'styled-components';

/* export const Wrapper = styled.div`
  width: 100%;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 336px;
  }
  @media screen and (min-width: 1280px) {
    width: 395px;
  }
`;

export const ColorBox = styled.div`
  display: block;
  min-width: 24px;
  min-height: 24px;
  background-color: ${props => props.color};
  border-radius: 2px;
`; */

// ======================

export const Section = styled.section`
  padding-top: 20px;
  color: var(--white);
  @media screen and (max-width: 767px) {
    padding-bottom: 45px;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    padding-bottom: 12px;
  }

  @media screen and (min-width: 1280px) {
    padding-bottom: 45px;
  }
`;

export const StyledTable = styled.table`
  margin: 0;
  border-radius: 8px;
  border-collapse: collapse;

  @media screen and (max-width: 767px) {
    max-width: 440px;
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    width: 336px;
  }
  @media screen and (min-width: 1280px) {
    width: 395px;
  }
`;

export const Thead = styled.thead`
  border-radius: 8px;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  background-color: rgba(82, 59, 126, 0.6);
  backdrop-filter: blur(50px);
`;
export const Th = styled.th`
  padding: 16px;
`;

export const ThCategory = styled(Th)`
  border-radius: 8px 0 0 8px;
  text-align: left;
  position: relative;
`;

export const ThSum = styled(Th)`
  border-radius: 0 8px 8px 0;
  text-align: right;
`;

export const Td = styled.td`
  padding: 16px;
  border-bottom: 1px solid #644e89;
`;

export const TdCategory = styled(Td)`
  /* text-align: left;
  position: relative; */
  display: flex;
  align-items: center;
  height: 54px;
`;

export const TdColor = styled.div`
  padding: 16px;
  border-bottom: 1px solid #644e89;
  background-color: ${({ color }) => color};
  border-radius: 2px;

  margin-right: 16px;
`;

export const TdSum = styled(Td)`
  text-align: right;
`;

export const TdType = styled.td`
  padding: 16px 0 0 16px;
  font-weight: 600;
`;

export const Total = styled.td`
  text-align: right;
  padding: 16px 16px 0 0;
  font-weight: 600;
`;
export const TotalExp = styled(Total)`
  color: var(--dashboard-text);
`;
export const TotalInc = styled(Total)`
  color: var(--yellow);
`;
