import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';

export const StyledWrapper = styled.div`
  display: flex;
  gap: 40px;
  flex-direction: column;
  align-items: center;
  padding: 28px 20px;
  @media screen and (min-width: 768px) {
    padding: 40px 70px;
  }

  h2 {
    color: var(--white);
    font-size: 24px;
    @media screen and (min-width: 767px) {
      font-size: 30px;
    }
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
  color: #ffffff;
  font-size: 50px;
  position: relative;

  &::after {
    content: '';
    display: block;
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 134, 141, 0.7);
    border-radius: 50px;
    box-shadow: 1px 5px 10px rgba(255, 134, 141, 0.7);
  }
`;

export const CustomSelect = styled(Select)`
  .my-select__control {
    border-radius: 0;
    border: none;

    /* outline: none !important; */
    background-color: transparent;
    border-bottom: 1px solid var(--transp-40);
  }

  /* .my-select__control input {
    outline: none !important;
  } */

  .my-select__indicator {
    transform: ${props => (props.menuIsOpen ? 'rotate(180deg)' : 'none')};
    display: ${props => (props.menuIsOpen ? 'block' : 'none')};
  }

  .css-hkrcqo-control {
    box-shadow: none;
  }
`;

export const customSelectStyles = {
  control: provided => ({
    ...provided,
    outline: 'none',
    color: 'var(--white)',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  indicatorContainer: () => ({
    display: 'none',
  }),
  menu: provided => ({
    ...provided,
    background: `linear-gradient(
    210deg,
    rgba(83, 61, 186, 1) 0%,
    rgba(80, 48, 154, 1) 43.14%,
    rgba(106, 70, 165, 1) 73.27%,
    rgba(133, 93, 175, 0.9) 120.03%
  )`,
  }),
};

export const StyledPicker = styled(DatePicker)`
  width: 182px;
  border: none;
  outline: none;
  background-color: transparent;
  border-bottom: 1px solid var(--transp-40);
  padding-bottom: 8px;
  color: var(--white);
  font-size: 18px;

  @media screen and (max-width: 767px) {
    width: 280px;
  }

  @media screen and (max-width: 767px) {
    width: 280px;
    text-align: left;
  }
`;

export const StyledWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const StyledInput = styled.input`
  border: none;
  outline: none;
  text-align: left;
  font-weight: 600;
  font-size: 18px;
  color: var(--white);
  background-color: transparent;
  border-bottom: 1px solid var(--transp-40);
  padding-bottom: 8px;
  padding-left: 20px;
  &::placeholder {
    color: var(--transp-60);
  }

  @media screen and (min-width: 768px) {
    width: 182px;
    text-align: center;
    padding-left: 8px;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
  margin-top: 20px;

  & > :last-child {
    text-align: left;
    font-weight: 400;
    @media screen and (min-width: 767px) {
      width: 394px;
    }
  }

  @media screen and (max-width: 767px) {
    width: 280px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  gap: 30px;

  .react-datepicker__input-container {
    position: relative;
    display: flex;
    width: 100%;
    flex-direction: row-reverse;
  }

  .react-datepicker__view-calendar-icon input {
    padding: 1px 2px 8px 20px;
  }

  .react-datepicker__input-container .react-datepicker__calendar-icon {
    position: absolute;
    bottom: 1px;
    right: 23px;
    transform: translateX(50%);
    width: 24px;
    height: 24px;
    fill: var(--purple);

    @media screen and (max-width: 767px) {
      right: 29px;
    }
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;

  & > button {
    margin: 0 !important;
  }
`;
