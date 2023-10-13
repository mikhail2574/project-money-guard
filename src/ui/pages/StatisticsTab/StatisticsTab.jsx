import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCategories } from 'redux/transactions/operations';
import {
  Chart,
  StatisticsDashboard,
  StatisticsTable,
} from 'ui/components/statistics';

const StatisticsTab = () => {
  const dispatch = useDispatch();

  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);

  useEffect(() => {
    dispatch(fetchCategories({ selectedYear, selectedMonth }));
  }, [selectedYear, selectedMonth, dispatch]);

  const onYearChange = val => {
    setSelectedYear(val.value);
  };
  const onMonthChange = val => {
    setSelectedMonth(val.value);
  };

  return (
    <section>
      <h2>Statistics</h2>
      <div>
        <Chart />
        <div>
          <StatisticsDashboard
            changeYear={onYearChange}
            changeMonth={onMonthChange}
          />
          <StatisticsTable />
        </div>
      </div>
    </section>
  );
};

export default StatisticsTab;
