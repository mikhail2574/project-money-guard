import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { colors } from '../StatisticsTable/StatisticsTable';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  selectCurrency,
  selectEUR,
  selectUSD,
} from 'redux/exchangeRate/selectors';
import { selectBalance } from 'redux/registration/selectors';

ChartJS.register(ArcElement, Tooltip, Legend);

export const DonutContainer = styled.div`
  min-width: 300px;
  height: 300px;
  position: relative;
`;

const Chart = statSummary => {
  const [chartData, setChartData] = useState(null);

  const currentCurrency = useSelector(selectCurrency);
  const balance = useSelector(selectBalance);
  const euro = useSelector(selectEUR);
  const usd = useSelector(selectUSD);

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
      console.log(data);

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

  const boxShadow = {
    width: '208px',
    height: '208px',
    'z-index': '999',
    'box-shadow': '0px -1px 16px 5px rgba(0,0,0,0.29)',
    'border-radius': '50%',
    position: 'absolute',
    top: '46px',
    left: '46px',
    'font-size': '18px',
    'padding-top': '95px',
    'text-align': 'center',
  };

  return (
    <DonutContainer>
      {chartData && (
        <>
          <Doughnut
            data={chartData}
            redraw={true}
            options={{ cutout: '70%', plugins: { legend: { display: false } } }}
          />
          <span></span>
          <span style={boxShadow}>
            {currentCurrency === 'EUR' && <p>€ {euro}</p>}
            {currentCurrency === 'USD' && <p>$ {usd}</p>}
            {currentCurrency === 'UAH' && <p>₴ {balance}</p>}
          </span>
        </>
      )}
    </DonutContainer>
  );
};

export default Chart;
