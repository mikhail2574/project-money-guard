import {
  StyledBalance,
  StyledBalanceBox,
  StyledBalanceLabel,
} from './Balance.styled';
// import { useSelector } from 'react-redux';
// import { selectName } from 'redux/registration/selectors';

export const Balance = () => {
  // const balance = useSelector(selectName);

  return (
    <div>
      <StyledBalanceBox>
        <StyledBalanceLabel>Your balance</StyledBalanceLabel>
        <StyledBalance>
          <span>₴ </span>
          24 000.00
          {/* {balance ? <>{balance.balance}</> : ''} */}
        </StyledBalance>
      </StyledBalanceBox>
    </div>
  );
};
