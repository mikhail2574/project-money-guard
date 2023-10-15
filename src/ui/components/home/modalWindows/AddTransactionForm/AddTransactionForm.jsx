import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdDateRange } from 'react-icons/md';

import {
  StyledPicker,
  CustomSelect,
  customSelectStyles,
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

import Button from 'ui/components/shared/Button';
import { selectCategories } from 'redux/transactions/selectors';
import { fetchCategories } from 'redux/transactions/operations';
import { useMyContext } from 'context/useMyContext';

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
              showIcon={MdDateRange}
            />

            />

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
