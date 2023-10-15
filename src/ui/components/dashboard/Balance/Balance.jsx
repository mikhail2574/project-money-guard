// export const Balance = () => {
//   return <p>"Your balance: 0 :("</p>;
// };

import { useMediaQuery } from 'react-responsive';
import {
  StyledBalance,
  StyledBalanceBox,
  StyledBalanceLabel,
} from './Balance.styled';
import { useSelector } from 'react-redux';
import { selectName } from 'redux/registration/selectors';

export const Balance = () => {
  const balance = useSelector(selectName);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });
  return (
    <div>
      {isDesktop && (
        <StyledBalanceBox>
          <StyledBalanceLabel>Your balance</StyledBalanceLabel>
          <StyledBalance>
            <span>₴ </span>

            {balance ? <>{balance.balance}</> : ''}
          </StyledBalance>
        </StyledBalanceBox>
      )}
      {isTablet && (
        <StyledBalanceBox maxW="296px" padL="40px" borR="8px" marB="0px">
          <StyledBalanceLabel>Your balance</StyledBalanceLabel>
          <StyledBalance>
            <span>₴ </span>

            {balance ? <>{balance.balance}</> : ''}
          </StyledBalance>
        </StyledBalanceBox>
      )}

      {isMobile && (
        <StyledBalanceBox maxW="440px" padL="40px" borR="8px" marB="32px">
          <StyledBalanceLabel>Your balance</StyledBalanceLabel>
          <StyledBalance>
            <span>₴ </span>

            {balance ? <>{balance.balance}</> : ''}
          </StyledBalance>
        </StyledBalanceBox>
      )}
    </div>
  );
};
