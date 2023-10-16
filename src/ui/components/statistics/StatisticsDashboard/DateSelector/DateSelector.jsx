import { components } from 'react-select';
import { VscChevronDown, VscChevronUp } from 'react-icons/vsc';
import { StyledSelector } from './DateSelector.styled';

const DateSelector = ({ options, value, onChange, ariaLabel }) => {
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

  const defaultValue = (options, value) => {
    return options.find(option => option.value === value);
  };

  return (
    <>
      <StyledSelector
        options={options}
        defaultValue={defaultValue(options, value)}
        placeholder="Select a date"
        onChange={value => onChange(value)}
        isSearchable={false}
        components={{ DropdownIndicator }}
        aria-label={ariaLabel}
        classNamePrefix="Select"
      />
    </>
  );
};

export default DateSelector;
