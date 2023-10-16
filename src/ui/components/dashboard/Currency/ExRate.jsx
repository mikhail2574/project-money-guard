import { render } from '@testing-library/react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrency, setEUR, setUSD } from 'redux/exchangeRate/exSlice';
import {
  selectCurrency,
  selectEUR,
  selectUSD,
} from 'redux/exchangeRate/selectors';
import { selectSummary } from 'redux/transactions/selectors';

export const ExchangeRate = () => {
  const dispatch = useDispatch();
  const balance = useSelector(selectSummary);

  useEffect(() => {
    dispatch(setEUR(balance));
    dispatch(setUSD(balance));
  }, [dispatch]);

  const currentCurrency = useSelector(selectCurrency);
  const euro = useSelector(selectEUR);
  const usd = useSelector(selectUSD);

  const handleUSD = currency => {
    dispatch(setCurrency(currency));
    console.log(currency);
  };

  const handleEUR = currency => {
    dispatch(setCurrency(currency));
    console.log(currency);
  };

  const handleUAH = currency => {
    dispatch(setCurrency(currency));
    console.log(currency);
  };

  return (
    <div>
      <button
        type="button"
        style={{ padding: '10px 20px' }}
        onClick={() => handleUAH('UAH')}
        disabled={currentCurrency === 'UAH'}
      >
        UAH
      </button>
      <button
        type="button"
        style={{ padding: '10px 20px' }}
        onClick={() => handleEUR('EUR')}
        disabled={currentCurrency === 'EUR'}
      >
        Set to EUR
      </button>
      <button
        type="button"
        style={{ padding: '10px 20px' }}
        onClick={() => handleUSD('USD')}
        disabled={currentCurrency === 'USD'}
      >
        Set to Dollar
      </button>
      {currentCurrency === 'EUR' && <p>Euro: {euro}</p>}
      {currentCurrency === 'USD' && <p>Dollar: {usd}</p>}
      {currentCurrency === 'UAH' && <p>UAH: {balance}</p>}
    </div>
  );
};
