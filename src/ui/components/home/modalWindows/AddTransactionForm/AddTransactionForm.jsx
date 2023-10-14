import React, { useState } from 'react';
import {
  StyledPlusMin,
  StyledSpanExpenses,
  StyledSpanIncome,
  StyledWrap,
  StyledWrapper,
} from './AddTransactionForm.styled';
import Switch from 'react-switch';
import Button from '../../shared/Button';
import { StyledCancel } from './AddTransactionForm.styled';
import { StyledForm } from './AddTransactionForm.styled';
import { StyledInput } from './AddTransactionForm.styled';
import { StyledDiv } from './AddTransactionForm.styled';

export const AddTransactionForm = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = nextChecked => {
    setChecked(nextChecked);
    console.log(checked);
  };
  return (
    <StyledWrapper>
      <h2>Add transaction</h2>
      <StyledWrap>
        <StyledSpanIncome checked={checked}>Income</StyledSpanIncome>
        <Switch
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
        <StyledSpanExpenses checked={checked}> Expense</StyledSpanExpenses>
      </StyledWrap>
      <StyledForm>
        <StyledDiv>
          <div>
            <StyledInput type="text" placeholder="0.00" />
            <StyledInput type="text" />
          </div>
          <StyledInput type="text" />
        </StyledDiv>
        <Button variant="login">Add</Button>
      </StyledForm>
      <StyledCancel>Cancel</StyledCancel>
    </StyledWrapper>
  );
};
