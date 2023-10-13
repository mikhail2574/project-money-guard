import {
  Chart,
  StatisticsDashboard,
  StatisticsTable,
} from 'ui/components/statistics';

const StatisticsTab = () => {
  return (
    <section>
      <h2>Statistics</h2>
      <div>
        <Chart />
        <div>
          <StatisticsDashboard />
          <StatisticsTable />
        </div>
      </div>
    </section>
  );
};

export default StatisticsTab;
