import React from 'react';
import { StyledSelector } from './DateSelector.styled';

const DateSelector = ({ options, value, onChange }) => {
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
        value={value}
        options={options}
        placeholder="Select a date"
        onChange={value => onChange(value)}
        styles={customScrollbarStyles}
      />
    </div>
  );
};

export default DateSelector;
