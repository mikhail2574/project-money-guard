import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, fetchSummary } from 'redux/transactions/operations';
import { selectTransactionsObj } from 'redux/transactions/selectors';
import {
  Chart,
  StatisticsDashboard,
  StatisticsTable,
} from 'ui/components/statistics';
import {
  DashboardWrapper,
  LeftSideWrapper,
  StatSection,
} from './StatisticsTab.styled';

const StatisticsTab = () => {
  const dispatch = useDispatch();

  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);

  const { categories, summary } = useSelector(selectTransactionsObj);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchSummary({ month, year }));
  }, [year, month, dispatch]);

  const onYearChange = val => {
    setYear(val.value);
  };
  const onMonthChange = val => {
    setMonth(val.value);
  };

  return (
    <StatSection>
      <h2>Statistics</h2>
      <LeftSideWrapper>
        <Chart categories={categories} statSummary={summary} />
        <DashboardWrapper>
          <StatisticsDashboard
            selectedYear={year}
            selectedMonth={month}
            changeYear={onYearChange}
            changeMonth={onMonthChange}
          />
          <StatisticsTable statSummary={summary} />
        </DashboardWrapper>
      </LeftSideWrapper>
    </StatSection>
  );
};

export default StatisticsTab;
