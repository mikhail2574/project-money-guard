import React, { useState, useEffect, createRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RiCalendar2Fill } from 'react-icons/ri';

import {
  StyledPicker,
  DropdownIndicator,
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
import { addTransaction, fetchCategories } from 'redux/transactions/operations';
import { useMyContext } from 'context/useMyContext';
import moment from 'moment/moment';
import { toast } from 'react-toastify';

export const AddTransactionForm = () => {
  const [checked, setChecked] = useState(true);
  const categories = useSelector(selectCategories);
  const [selectCategory, setSelectCategory] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(Date.now);
  const { close } = useMyContext();
  const dispatch = useDispatch();
  const selectCat = createRef();
  const selectDate = createRef();
  const inputAmount = createRef();
  const inputComment = createRef();
  const form = createRef();

  const incomeId = categories.find(
    category => category.type === 'INCOME' && category.id
  );

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

  const onSubmit = () => {
    if (!inputComment.current.value) {
      return toast.error('Pleace, leave operation comment!');
    }
    if (!inputAmount.current.value) {
      return toast.error('Pleace, select your amount!');
    }
    if (!selectedDate) {
      return toast.error('Pleace, select the date of thansaction!');
    }

    if (checked) {
      if (!selectCategory?.value) {
        return toast.error('Pleace, select category for expenses!');
      }
    }

    const data = {
      transactionDate: moment(selectedDate).format('YYYY-MM-DD'),
      type: checked ? 'EXPENSE' : 'INCOME',
      categoryId: checked ? selectCategory?.value : incomeId.id,
      comment: inputComment.current.value,
      amount: checked
        ? Number(-inputAmount.current.value)
        : Number(inputAmount.current.value),
    };
    dispatch(addTransaction(data));
    form.current.reset();
    close();
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
          title="Select your type of transaction"
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
      <StyledForm onSubmit={onSubmit} ref={form}>
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
              title="Chose your category"
              ref={selectCat}
            />
          ) : null}
          <InputContainer>
            <StyledInput
              title="Enter your amount"
              type="number"
              placeholder="0.00"
              required
              ref={inputAmount}
            />
            <StyledPicker
              name="date"
              dateFormat="dd.MM.yyyy"
              maxDate={new Date()}
              shouldCloseOnSelect={true}
              selected={selectedDate}
              onChange={date => setSelectedDate(date)}
              showIcon={false}
              title="Choose the date"
              ref={selectDate}
            />
            <RiCalendar2Fill
              className="calendar-icon"
              style={{
                width: '24',
                height: '24',
              }}
            />
          </InputContainer>
          <StyledInput
            title="You can leave your comment here"
            placeholder="Comment"
            type="text"
            required
            ref={inputComment}
          />
        </StyledDiv>
      </StyledForm>
      <ButtonContainer>
        <Button
          title="to add your transaction"
          variant="login"
          type="submit"
          onClick={onSubmit}
        >
          Add
        </Button>
        <Button title="Cancel the operation" variant="cancel" onClick={close}>
          Cancel
        </Button>
      </ButtonContainer>
    </StyledWrapper>
  );
};
