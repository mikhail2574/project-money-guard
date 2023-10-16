import {
  StyledBalance,
  StyledBalanceBox,
  StyledBalanceLabel,
} from './Balance.styled';
import { useSelector } from 'react-redux';
import { selectName } from 'redux/registration/selectors';

export const Balance = () => {
  const balance = useSelector(selectName);

  return (
    <div>
      <StyledBalanceBox>
        <StyledBalanceLabel>Your balance</StyledBalanceLabel>
        <StyledBalance>
          <span>₴ </span>

          {balance ? <>{balance.balance}</> : '0'}
        </StyledBalance>
      </StyledBalanceBox>
    </div>
  );
};
