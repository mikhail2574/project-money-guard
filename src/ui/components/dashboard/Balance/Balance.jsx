import { useSelector } from 'react-redux';

import {
  StyledBalance,
  StyledBalanceBox,
  StyledBalanceLabel,
  StyledBalanceWrap,
} from './Balance.styled';
import {
  selectCurrency,
  selectEUR,
  selectUSD,
} from 'redux/exchangeRate/selectors';
import { selectBalance } from 'redux/registration/selectors';
// import { useSelector } from 'react-redux';
// import { selectName } from 'redux/registration/selectors';

export const Balance = () => {
  // const balance = useSelector(selectName);
  const currentCurrency = useSelector(selectCurrency);
  const balance = useSelector(selectBalance);
  const euro = useSelector(selectEUR);
  const usd = useSelector(selectUSD);
  return (
    <StyledBalanceWrap>
      <StyledBalanceBox>
        <StyledBalanceLabel>Your balance</StyledBalanceLabel>
        <StyledBalance>
          {currentCurrency === 'EUR' && <p>&#8364; {euro}</p>}
          {currentCurrency === 'USD' && <p>&#36; {usd}</p>}
          {currentCurrency === 'UAH' && <p>&#8372; {balance}</p>}
        </StyledBalance>
      </StyledBalanceBox>
    </StyledBalanceWrap>
  );
};
