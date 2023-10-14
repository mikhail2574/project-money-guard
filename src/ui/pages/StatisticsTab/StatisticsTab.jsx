import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, fetchSummary } from 'redux/transactions/operations';
import { selectCategories, selectSummary } from 'redux/transactions/selectors';
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
    <StatSection>
      <h2>Statistics</h2>
      <LeftSideWrapper>
        <Chart categories={categories} statSummary={statSummary} />
        <DashboardWrapper>
          <StatisticsDashboard
            selectedYear={selectedYear}
            selectedMonth={selectedMonth}
            changeYear={onYearChange}
            changeMonth={onMonthChange}
          />
          <StatisticsTable statSummary={statSummary} />
        </DashboardWrapper>
      </LeftSideWrapper>
    </StatSection>
  );
};

export default StatisticsTab;
