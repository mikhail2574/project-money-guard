import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
// import { MdDateRange } from 'react-icons/md';

import {
  StyledPlusMin,
  StyledSpanExpenses,
  StyledSpanIncome,
  StyledWrap,
  StyledWrapper,
  StyledForm,
  StyledInput,
  StyledDiv,
  InputContainer,
  ButtonContainer,
} from './AddTransactionForm.styled';
import Switch from 'react-switch';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import Button from 'ui/components/shared/Button';
import { selectCategories } from 'redux/transactions/selectors';
import { fetchCategories } from 'redux/transactions/operations';
import { useMyContext } from 'context/useMyContext';

const StyledPicker = styled(DatePicker)`
  width: 182px;
  border: none;
  text-align: center;
  outline: none;
  background-color: transparent;
  border-bottom: 1px solid var(--transp-40);
  padding-bottom: 8px;
  color: var(--white);
  font-size: 18px;

  .react-datepicker-wrapper {
    @media screen and (max-width: 767px) {
      width: 100%;
    }
  }

  .react-datepicker__input-container {
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    display: flex;
  }

  .date-icon {
    position: absolute;
    bottom: 12px;
    right: 12px;
    width: 24px;
    height: 24px;
    fill: var(--purple);

    @media screen and (max-width: 767px) {
      flex-direction: column;
    }
  }

  @media screen and (max-width: 767px) {
    width: 280px;
    text-align: left;
    padding-left: 20px;
  }
`;

const CustomSelect = styled(Select)`
  .my-select__control {
    border-radius: 0;
    border: none;
    outline: none !important;
    background-color: transparent;
    border-bottom: 1px solid var(--transp-40);
  }

  .my-select__control input {
    outline: none !important;
  }

  .my-select__indicator {
    transform: ${props => (props.menuIsOpen ? 'rotate(180deg)' : 'none')};
    display: ${props => (props.menuIsOpen ? 'block' : 'none')};
  }
`;

const customSelectStyles = {
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

export const AddTransactionForm = () => {
  const [checked, setChecked] = useState(true);
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const [selectCategory, setSelectCategory] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(Date.now);
  const { close } = useMyContext();

  const handleChange = nextChecked => {
    setChecked(nextChecked);
  };

  const onChangeCategory = val => {
    setSelectCategory(val);
  };

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <StyledWrapper>
      <h2>Add transaction</h2>
      <StyledWrap>
        <StyledSpanIncome checked={checked}>Income</StyledSpanIncome>
        <Switch
          className="switch"
          onChange={handleChange}
          checked={checked}
          width={80}
          height={40}
          onHandleColor="#FF868D"
          offHandleColor="#FFB627"
          uncheckedIcon={false}
          checkedIcon={false}
          offColor="#FFFFFF"
          onColor="#FFFFFF"
          handleDiameter={44}
          uncheckedHandleIcon={<StyledPlusMin>+</StyledPlusMin>}
          checkedHandleIcon={<StyledPlusMin>-</StyledPlusMin>}
        />
        <StyledSpanExpenses checked={checked}>Expense</StyledSpanExpenses>
      </StyledWrap>
      <StyledForm>
        <StyledDiv>
          {checked ? (
            <CustomSelect
              options={categories}
              value={selectCategory}
              onChange={onChangeCategory}
              classNamePrefix="my-select"
              aria-label={'Select category'}
              styles={customSelectStyles}
              placeholder=""
              menuIsOpen={isDropdownOpen}
              onMenuOpen={() => setIsDropdownOpen(true)}
              onMenuClose={() => setIsDropdownOpen(false)}
            />
          ) : null}
          <InputContainer>
            <StyledInput type="text" placeholder="0.00" />
            <StyledPicker
              name="date"
              dateFormat="dd.MM.yyyy"
              maxDate={new Date()}
              shouldCloseOnSelect={true}
              selected={selectedDate}
              onChange={date => setSelectedDate(date)}
            />
            {/* <MdDateRange className="calendar-icon" /> */}
          </InputContainer>
          <StyledInput type="text" />
        </StyledDiv>
      </StyledForm>
      <ButtonContainer>
        <Button variant="login">Add</Button>
        <Button variant="cancel" onClick={close}>
          Cancel
        </Button>
      </ButtonContainer>
    </StyledWrapper>
  );
};
