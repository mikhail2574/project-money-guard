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
import selectBg from 'ui/images/category-bg/category-desktop.webp';

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
    background-color: transparent;
    border-bottom: 1px solid var(--transp-40);
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
    backgroundImage: `url(${selectBg})`,
    backgroundSize: 'cover',
  }),
};

export const AddTransactionForm = () => {
  const [checked, setChecked] = useState(true);
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const [selectCategory, setSelectCategory] = useState(null);

  const handleChange = nextChecked => {
    setChecked(nextChecked);
  };

  const { close } = useMyContext();

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
            />
          ) : null}
          <InputContainer>
            <StyledInput type="text" placeholder="0.00" />
            <StyledPicker selected={new Date()} />
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
