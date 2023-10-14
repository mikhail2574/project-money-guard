import React from 'react';
import { StyledSelector } from './DateSelector.styled';

const DateSelector = ({ options, value, onChange, ariaLabel }) => {
  const customScrollbarStyles = {
    menuList: provided => ({
      ...provided,
      '&::-webkit-scrollbar': {
        width: '6px',
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#BFB4DD',
        borderRadius: '12px',
      },
    }),
  };
  return (
    <div>
      <StyledSelector
        options={options}
        defaultValue={value}
        aria-label={ariaLabel}
        placeholder="Select a date"
        onChange={value => onChange(value)}
        classNamePrefix="Select"
        styles={customScrollbarStyles}
      />
    </div>
  );
};

export default DateSelector;
