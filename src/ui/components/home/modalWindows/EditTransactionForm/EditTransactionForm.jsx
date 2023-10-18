import React from 'react';
import {
  StyledSpanExpenses,
  StyledSpanIncome,
  ButtonContainer,
  StyledForm,
  StyledInput,
} from './EditTransactionForm.styled';
import Button from 'ui/components/shared/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCategories,
  selectTransactions,
} from 'redux/transactions/selectors';
import { useMyContext } from 'context/useMyContext';
import { Field, Formik, useField, useFormikContext } from 'formik';
import {
  InputContainer,
  StyledPicker,
  StyledDiv,
  StyledWrapper,
  StyledWrap,
} from '../AddTransactionForm/AddTransactionForm.styled';
import { RiCalendar2Fill } from 'react-icons/ri';
import { toast } from 'react-toastify';
import { editTransaction } from 'redux/transactions/operations';
import { getInfo } from 'redux/registration/operation';

export const EditTransactionForm = () => {
  const dispatch = useDispatch();
  const { id, close } = useMyContext();
  const transactions = useSelector(selectTransactions);
  const { type, categoryId, comment, amount, transactionDate } =
    transactions.find(item => item.id === id);
  console.log(transactionDate);
  const formattedDate = new Date(Date.parse(transactionDate));
  const categories = useSelector(selectCategories);
  const transactionCategory = categories.find(
    item => item.id === categoryId
  ).name;

  const formatDateBack = date => {
    let day = date.getDate();
    if (day < 10) day = `0${day}`;
    return `${date.getFullYear()}-${date.getMonth() + 1}-${day}`;
  };

  const CustomDatePicker = ({ ...props }) => {
    const { setFieldValue } = useFormikContext();
    const [field] = useField(props);
    return (
      <StyledPicker
        {...field}
        {...props}
        dateFormat="dd.MM.yyyy"
        maxDate={new Date()}
        shouldCloseOnSelect={true}
        showIcon={false}
        selected={(field.value && new Date(field.value)) || null}
        onChange={val => {
          setFieldValue(field.name, val);
        }}
      />
    );
  };

  const validateAmount = value => {
    let error;
    if (!value) {
      error = 'Enter amount';
      toastError(error);
    } else if (type === 'INCOME' && value < 0) {
      error = 'Enter positive amount';
      toastError(error);
    } else if (type === 'EXPENSE' && value > 0) {
      error = 'Enter positive amount';
      toastError(error);
    }
    return error;
  };

  const validateDate = value => {
    let error;
    if (!value) {
      error = 'Enter a date';
      toastError(error);
    }
    console.log(error);
    return error;
  };

  const validateComment = value => {
    let error;
    if (!value) {
      error = 'Add a comment';
      toastError(error);
    }
    return error;
  };

  const toastError = error => {
    toast.error(`${error}`, { toastId: error });
  };

  return (
    <StyledWrapper>
      <h2>Edit transaction</h2>
      <StyledWrap>
        <StyledSpanIncome checked={type === 'INCOME'}>Income</StyledSpanIncome>
        <span style={{ color: 'white' }}>/</span>
        <StyledSpanExpenses checked={type === 'EXPENSE'}>
          Expense
        </StyledSpanExpenses>
      </StyledWrap>
      <Formik
        validateOnBlur={false}
        validateOnChange={false}
        initialValues={{
          category: categories.find(item => item.name === transactionCategory),
          date: formattedDate,
          amount: amount,
          comment: comment,
        }}
        onSubmit={values => {
          dispatch(
            editTransaction({
              id,
              type,
              transactionDate: formatDateBack(values.date),
              amount: +values.amount,
              comment: values.comment,
              categoryId: categories.find(
                item => item.name === transactionCategory
              ).id,
            })

          );
          close();
          dispatch(getInfo());
        }}
      >
        {({ errors, touched, isValidating }) => (
          <StyledForm>
            <StyledDiv>
              {type === 'EXPENSE' ? (
                <StyledInput
                  name="category"
                  disabled={true}
                  value={transactionCategory}
                  style={{ width: '100%', textAlign: 'start', fontWeight: 400 }}
                />
              ) : null}
              <InputContainer>
                <StyledInput
                  title="Enter your amount"
                  defaultValue={amount}
                  type="number"
                  placeholder="0.00"
                  name="amount"
                  validate={validateAmount}
                />
                <Field
                  as={CustomDatePicker}
                  validate={validateDate}
                  name="date"
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
                defaultValue={comment}
                placeholder="Comment"
                type="text"
                name="comment"
                validate={validateComment}
              />
            </StyledDiv>
            <ButtonContainer>
              <Button
                title="to add your transaction"
                variant="login"
                type="submit"
              >
                Save
              </Button>
              <Button title="Cancel the operation" variant="cancel">
                Cancel
              </Button>
            </ButtonContainer>
          </StyledForm>
        )}
      </Formik>
    </StyledWrapper>
  );
};
