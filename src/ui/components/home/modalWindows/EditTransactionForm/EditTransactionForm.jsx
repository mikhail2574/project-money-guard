import React, { useState } from 'react';
import {
  StyledSpanExpenses,
  StyledSpanIncome,
  StyledWrap,
  StyledWrapper,
  StyledCancel,
  StyledForm,
  StyledInput,
  StyledDiv,
  StyledInputContainer,
} from './EditTransactionForm.styled';
import Button from 'ui/components/shared/Button';
import { useSelector } from 'react-redux';
import {
  selectCategories,
  selectTransactions,
} from 'redux/transactions/selectors';
import Select from 'react-select';
import ReactDatePicker from 'react-datepicker';
import { useMyContext } from 'context/useMyContext';
import { addTransaction } from 'redux/transactions/operations';

export const EditTransactionForm = () => {
  const { id, close } = useMyContext();
  const transactions = useSelector(selectTransactions);
  const { type, categoryId, comment, amount, transactionDate } =
    transactions.find(item => item.id === id);
  const formattedDate = new Date(Date.parse(transactionDate));
  const categories = useSelector(selectCategories);
  const options = categories.map(item => {
    return { value: item.id, label: item.name };
  });
  const transactionCategory = categories.find(
    item => item.id === categoryId
  ).name;
  const [date, setDate] = useState(formattedDate);
  const [chosenCategory, setChosenCategory] = useState(transactionCategory);
  // dispacth(addTransaction()).unwrap().then(()=> closeModal()).catch((error)=> toast.error(eror.message))
  return (
    <StyledWrapper>
      <h2>Add transaction</h2>
      <StyledWrap>
        <StyledSpanIncome checked={type === 'INCOME'}>Income</StyledSpanIncome>
        <span style={{ color: 'white' }}>/</span>
        <StyledSpanExpenses checked={type === 'EXPENSE'}>
          Expense
        </StyledSpanExpenses>
      </StyledWrap>
      <StyledForm>
        {type === 'INCOME' ? (
          <StyledDiv>
            <StyledInputContainer>
              <StyledInput type="text" defaultValue={amount} />
              <ReactDatePicker
                style={{ flex: 1 }}
                selected={date}
                onChange={date => setDate(date)}
              />
            </StyledInputContainer>
            <StyledInput type="text" defaultValue={comment} />
          </StyledDiv>
        ) : (
          <StyledDiv>
            <Select
              options={options}
              placeholder={chosenCategory}
              // defaultInputValue={chosenCategory}
              onChange={selectedCategory => setChosenCategory(selectedCategory)}
            />
            <StyledInputContainer>
              <StyledInput type="text" defaultValue={amount} />
              <ReactDatePicker
                selected={date}
                onChange={date => setDate(date)}
              />
            </StyledInputContainer>
            <StyledInput type="text" defaultValue={comment} />
          </StyledDiv>
        )}
        <Button variant="login">Save</Button>
      </StyledForm>
      <StyledCancel onClick={close}>Cancel</StyledCancel>
    </StyledWrapper>
  );
};
