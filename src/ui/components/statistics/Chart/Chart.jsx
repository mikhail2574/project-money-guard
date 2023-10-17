import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { colors } from '../StatisticsTable/StatisticsTable';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend);

export const DonutContainer = styled.div`
  min-width: 288px;
  height: 288px;
`;

const Chart = statSummary => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    if (statSummary && statSummary.statSummary.categoriesSummary) {
      const data = {
        labels: [...colors.map(color => color.name)],
        datasets: [
          {
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            backgroundColor: colors.map(color => color.color),
            hoverOffset: 4,
          },
        ],
      };

      if (statSummary.statSummary.categoriesSummary) {
        statSummary.statSummary.categoriesSummary.forEach(transaction => {
          if (transaction.type !== 'EXPENSE') {
            return transaction;
          }
          switch (transaction.name) {
            case 'Main expenses':
              data.datasets[0].data[0] += Math.abs(transaction.total);
              break;
            case 'Products':
              data.datasets[0].data[1] += Math.abs(transaction.total);
              break;
            case 'Car':
              data.datasets[0].data[2] += Math.abs(transaction.total);
              break;
            case 'Self care':
              data.datasets[0].data[3] += Math.abs(transaction.total);
              break;
            case 'Child care':
              data.datasets[0].data[4] += Math.abs(transaction.total);
              break;
            case 'Household products':
              data.datasets[0].data[5] += Math.abs(transaction.total);
              break;
            case 'Education':
              data.datasets[0].data[6] += Math.abs(transaction.total);
              break;
            case 'Leisure':
              data.datasets[0].data[7] += Math.abs(transaction.total);
              break;
            case 'Other expenses':
              data.datasets[0].data[8] += Math.abs(transaction.total);
              break;
            case 'Entertainment':
              data.datasets[0].data[9] += Math.abs(transaction.total);
              break;
            case 'Income':
              data.datasets[0].data[10] += Math.abs(transaction.total);
              break;
            default:
              console.log('Type for donut not found!!');
          }
        });
        setChartData(data);
      } else {
        // When we don't have data -> empty donut
        const emptyData = {
          labels: ['Empty donut!'],
          datasets: [
            {
              data: [1],
              backgroundColor: ['gray'],
            },
          ],
        };
        setChartData(emptyData);
      }
    }
  }, [statSummary]);
  return (
    <DonutContainer>
      {chartData && (
        <Doughnut
          data={chartData}
          redraw={true}
          options={{ plugins: { legend: { display: false } } }}
        />
      )}
    </DonutContainer>
  );
};

export default Chart;
