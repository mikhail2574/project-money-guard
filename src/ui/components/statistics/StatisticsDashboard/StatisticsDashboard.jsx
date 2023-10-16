import DateSelector from './DateSelector/DateSelector';
import { SelectWrapper } from './StatisticsDashboard.styled';

const StatisticsDashboard = ({
  changeYear,
  changeMonth,
  selectedYear,
  selectedMonth,
}) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const currentYear = new Date().getFullYear();

  const monthOptions = months.map((month, idx) => ({
    value: idx + 1,
    label: month,
  }));
  const yearOptions = Array.from({ length: 5 }, (_, idx) => ({
    value: currentYear - idx,
    label: String(currentYear - idx),
  }));
  return (
    <SelectWrapper>
      <DateSelector
        options={monthOptions}
        value={selectedMonth}
        onChange={changeMonth}
        ariaLabel={'Select month'}
      />
      <DateSelector
        options={yearOptions.reverse()}
        value={selectedYear}
        onChange={changeYear}
        ariaLabel={'Select year'}
      />
    </SelectWrapper>
  );
};

export default StatisticsDashboard;
