import React from 'react';
import { StyledSelector } from './DateSelector.styled';

const DateSelector = ({ options, value, onChange, ariaLabel }) => {
  return (
    <div>
      <StyledSelector
        options={options}
        defaultValue={value}
        aria-label={ariaLabel}
        placeholder="Select a date"
        onChange={value => onChange(value)}
        classNamePrefix="Select"
      />
    </div>
  );
};

export default DateSelector;
