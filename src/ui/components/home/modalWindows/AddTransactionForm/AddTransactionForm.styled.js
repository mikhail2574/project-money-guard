import styled from 'styled-components';

export const StyledWrapper = styled.div`
  padding: 40px 70px;
  h2 {
    color: var(--white);
    text-align: center;
    margin-bottom: 40px;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
export const StyledSpanIncome = styled.span`
  color: ${props => (props.checked ? 'rgba(255, 255, 255, 0.6)' : '#FFB627')};
`;

export const StyledSpanExpenses = styled.span`
  color: ${props => (props.checked ? '#FF868D' : 'rgba(255, 255, 255, 0.6)')};
`;

export const StyledPlusMin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  /* margin-top: -6px; */
  color: #ffffff;
  font-size: 50px;
`;

export const StyledWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
