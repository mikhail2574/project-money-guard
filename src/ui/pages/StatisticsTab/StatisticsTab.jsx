import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, fetchSummary } from 'redux/transactions/operations';
import { selectCategories, selectSummary } from 'redux/transactions/selectors';
import {
  Chart,
  StatisticsDashboard,
  StatisticsTable,
} from 'ui/components/statistics';

const StatisticsTab = () => {
  const dispatch = useDispatch();

  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);

  const categories = useSelector(selectCategories);
  const statSummary = useSelector(selectSummary);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchSummary({ selectedYear, selectedMonth }));
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
        <Chart categories={categories} statSummary={statSummary} />
        <div>
          <StatisticsDashboard
            changeYear={onYearChange}
            changeMonth={onMonthChange}
          />
          <StatisticsTable statSummary={statSummary} />
        </div>
      </div>
    </section>
  );
};

export default StatisticsTab;
