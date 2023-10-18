import { setCurrency, setEUR, setUSD } from 'redux/exchangeRate/exSlice';
import { useEffect } from 'react';
import { VscChevronDown, VscChevronUp } from 'react-icons/vsc';
import { components } from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrency } from 'redux/exchangeRate/selectors';
import { selectBalance } from 'redux/registration/selectors';
import { CustomValSelect } from './ExRateChanger.styled';

export const ExRateChanger = () => {
  const dispatch = useDispatch();
  const option = [
    { value: 1, label: 'UAH' },
    { value: 2, label: 'EUR' },
    { value: 3, label: 'USD' },
  ];

  const balance = useSelector(selectBalance);
  const currentCurrency = useSelector(selectCurrency);

  useEffect(() => {
    dispatch(setEUR(balance));
    dispatch(setUSD(balance));
  }, [dispatch, balance]);

  const handleCurrency = currency => {
    dispatch(setCurrency(currency));
  };

  const defaultValue = (options, value) => {
    return options.find(option => option.label === value);
  };

  const DropdownIndicator = props => {
    if (props.isFocused) {
      return (
        <components.DropdownIndicator {...props}>
          <VscChevronUp />
        </components.DropdownIndicator>
      );
    }
    return (
      <components.DropdownIndicator {...props}>
        <VscChevronDown />
      </components.DropdownIndicator>
    );
  };
  return (
    <>
      <CustomValSelect
        classNamePrefix="my-cusom-select"
        options={option}
        defaultValue={defaultValue(option, currentCurrency)}
        placeholder="Select a currency"
        onChange={option => {
          handleCurrency(option.label);
        }}
        isSearchable={false}
        components={{ DropdownIndicator }}
      />
    </>
  );
};
