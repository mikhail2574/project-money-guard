import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RiCalendar2Fill } from 'react-icons/ri';
import { VscChevronDown } from 'react-icons/vsc';

import {
  StyledPicker,
  CustomSelect,
  CustomStyles,
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
import { components } from 'react-select';

export const AddTransactionForm = () => {
  const [checked, setChecked] = useState(true);
  const categories = useSelector(selectCategories);
  const [selectCategory, setSelectCategory] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(Date.now);
  const { close } = useMyContext();
  const dispatch = useDispatch();

  const DropdownIndicator = props => {
    return (
      <components.DropdownIndicator {...props}>
        <VscChevronDown />
      </components.DropdownIndicator>
    );
  };

  const formattedCategories = categories.map(category => ({
    value: category.id,
    label: category.name,
  }));

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
              options={formattedCategories}
              value={selectCategory}
              onChange={onChangeCategory}
              classNamePrefix="my-select"
              aria-label={'Select category'}
              components={{ DropdownIndicator }}
              placeholder="Select category"
              menuIsOpen={isDropdownOpen}
              styles={CustomStyles}
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
              showIcon={false}
            />
            <RiCalendar2Fill
              className="calendar-icon"
              style={{
                width: '24',
                height: '24',
              }}
            />
          </InputContainer>
          <StyledInput placeholder="Comment" type="text" />
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
