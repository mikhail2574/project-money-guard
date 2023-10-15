import React from 'react';
import { StyledSelector } from './DateSelector.styled';

const DateSelector = ({ options, value, onChange, ariaLabel }) => {
  const defaultValue = (options, value) => {
    return options.find(option => option.value === value);
  };

  return (
    <div>
      <StyledSelector
        options={options}
        defaultValue={defaultValue(options, value)}
        aria-label={ariaLabel}
        placeholder="Select a date"
        onChange={value => onChange(value)}
        classNamePrefix="Select"
      />
    </div>
  );
};

export default DateSelector;
