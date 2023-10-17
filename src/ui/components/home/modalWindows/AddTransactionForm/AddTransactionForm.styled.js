import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';
import { components } from 'react-select';
import { VscChevronDown } from 'react-icons/vsc';

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
  color: var(--white);
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
    font-size: 18px;
    border: none;
    box-shadow: none;
    cursor: pointer;
    background-color: transparent;
    border-bottom: 1px solid var(--transp-40);
  }

  .my-select__control:hover {
    border-color: --transp-40;
  }

  .my-select__single-value {
    color: var(--white);
  }

  .my-select-control--is-focused {
    border: 0;
    outline: none;
  }

  .my-select__indicator-separator {
    display: none;
  }

  .my-select__indicator {
    position: absolute;
    top: 5px;
    right: 0;
    padding: 0;
    color: var(--white);

    transform: ${props => (props.menuIsOpen ? 'rotate(180deg)' : 'none')};
    display: ${props => (props.menuIsOpen ? 'block' : 'none')};

    & > svg {
      width: 30px !important;
      height: 30px !important;
    }
  }

  .my-select__menu {
    background: linear-gradient(
      210deg,
      rgba(83, 61, 186, 1) 0%,
      rgba(80, 48, 154, 1) 43.14%,
      rgba(106, 70, 165, 1) 73.27%,
      rgba(133, 93, 175, 0.9) 120.03%
    );
    color: var(--transp-10);
  }

  .my-select__menu-list {
    color: var(--white);
    font-size: 16px;

    &::-webkit-scrollbar {
      width: 0;
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--dashboard-text);
    }
  }

  .my-select__option--is-focused {
    color: rgba(255, 134, 141, 1);
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
  }
  .my-select__option--is-selected {
    color: rgba(255, 134, 141, 1);
    background-color: rgba(255, 255, 255, 0);
    cursor: pointer;
  }

  .my-select__input {
    color: var(--white) !important;
  }
`;

export const CustomStyles = {
  option: provided => ({
    ...provided,
    paddingLeft: '20px',
  }),

  placeholder: base => ({
    ...base,
    color: 'var(--transp-60)',
    '@media screen and (max-width: 767px)': {
      paddingLeft: '8px',
    },
  }),
};

export const DropdownIndicator = props => {
  return (
    <components.DropdownIndicator {...props}>
      <VscChevronDown />
    </components.DropdownIndicator>
  );
};

export const StyledPicker = styled(DatePicker)`
  width: 182px;
  border: none;
  outline: none;
  background-color: transparent;
  border-bottom: 1px solid var(--transp-40);
  padding: 1px 2px 8px 20px;
  color: var(--white);
  font-size: 18px;
  cursor: pointer;

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
  cursor: pointer;
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
  position: relative;
  width: 394px;
  gap: 40px;
  flex-direction: column;
  margin-top: 20px;

  & > :last-child {
    text-align: left;
    font-weight: 400;

    @media screen and (max-width: 767px) {
      padding-bottom: 52px;
    }

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
  position: relative;
  gap: 30px;

  .react-datepicker__input-container {
    display: flex;
    width: 100%;
    flex-direction: row-reverse;
  }

  .react-datepicker {
    position: absolute;
    top: 0;
    left: -65px;

    @media screen and (max-width: 767px) {
      top: -10px;
      left: 10px;
    }
  }

  .react-datepicker__month-container {
    background-color: beige;
  }

  .react-datepicker-popper[data-placement^='bottom']
    .react-datepicker__triangle::before {
    @media screen and (max-width: 767px) {
      display: none;
    }
  }

  .react-datepicker-popper[data-placement^='bottom']
    .react-datepicker__triangle::after {
    @media screen and (max-width: 767px) {
      top: -1px;
      left: -16px;
    }
  }

  .calendar-icon {
    position: absolute;
    color: var(--purple);
    right: 23px;
    bottom: 8px;

    @media screen and (max-width: 767px) {
      top: 67px;
      right: 29px;
    }
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
    gap: 40px;
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
