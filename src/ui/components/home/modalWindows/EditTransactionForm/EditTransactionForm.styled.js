import styled from 'styled-components';

export const StyledWrapper = styled.div`
  padding: 28px 20px;
  @media screen and (min-width: 768px) {
    padding: 40px 70px;
  }

  h2 {
    color: var(--white);
    text-align: center;
    margin-bottom: 40px;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @media screen and (min-width: 767px) {
      font-size: 30px;
    }
  }
`;
export const StyledSpanIncome = styled.span`
  color: ${props => (!props.checked ? 'rgba(255, 255, 255, 0.6)' : '#FFB627')};
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
  margin-bottom: 40px;
`;
export const StyledCancel = styled.button`
  width: 280px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 20px;
  padding: 5px 10px;
  margin: 10px 15px;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  background-color: #ffffff;
  color: #623f8b;
  &:hover {
    font-weight: 600;
  }
  @media screen and (min-width: 768px) {
    width: 300px;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const StyledInputContainer = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
`;

export const StyledInput = styled.input`
  width: 100%;
  flex: 1;
  border: none;
  color: white;
  background-color: transparent;
  border-bottom: 1px solid var(--transp-40);
  padding-bottom: 8px;
  margin-bottom: 40px;
  &::placeholder {
    color: var(--transp-60);
  }
  outline: none;
`;
export const StyledDiv = styled.div`
  max-width: 280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
