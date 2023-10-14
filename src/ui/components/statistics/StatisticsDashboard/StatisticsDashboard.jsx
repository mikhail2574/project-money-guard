import DateSelector from './DateSelector/DateSelector';

const StatisticsDashboard = ({ changeYear, changeMonth }) => {
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

  const monthOptions = months.map(month => ({
    value: month,
    label: month,
  }));
  const yearOptions = Array.from({ length: 5 }, (_, idx) => ({
    value: currentYear - idx,
    label: String(currentYear - idx),
  }));
  return (
    <>
      <DateSelector options={monthOptions} onChange={changeMonth} />
      <DateSelector options={yearOptions} onChange={changeYear} />
    </>
  );
};

export default StatisticsDashboard;
