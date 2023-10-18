import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { colors } from '../StatisticsTable/StatisticsTable';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import {
  selectCurrency,
  selectEUR,
  selectUSD,
} from 'redux/exchangeRate/selectors';
import { selectBalance } from 'redux/registration/selectors';
import { selectIsLoading } from 'redux/transactions/selectors';
import { LoaderSpinner } from 'ui/components/dashboard/Loader/Loader';

ChartJS.register(ArcElement, Tooltip, Legend);

export const DonutContainer = styled.div`
  min-width: 300px;
  height: 300px;
  position: relative;
  @media (max-width: 767px) {
    margin-bottom: 32px;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    min-width: 336px;
  }
`;

const Chart = ({ statSummary }) => {
  const loading = useSelector(selectIsLoading);
  const [chartData, setChartData] = useState(null);

  const currentCurrency = useSelector(selectCurrency);
  const balance = useSelector(selectBalance);
  const euro = useSelector(selectEUR);
  const usd = useSelector(selectUSD);

  useEffect(() => {
    const processData = async () => {
      if (statSummary && statSummary.categoriesSummary) {
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

        statSummary.categoriesSummary.forEach(transaction => {
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
      }
    };
    processData();
  }, [statSummary]);

  const emptyData = {
    labels: ['Empty donut!'],
    datasets: [
      {
        data: [1],
        backgroundColor: ['gray'],
      },
    ],
  };

  const boxShadow = {
    width: '208px',
    height: '208px',
    boxShadow: '0px -1px 16px 5px rgba(0,0,0,0.29)',
    borderRadius: '50%',
    position: 'absolute',
    top: '46px',
    left: '46px',
    fontSize: '18px',
    paddingTop: '95px',
    textAlign: 'center',
  };

  return (
    <DonutContainer>
      {console.log(chartData)}
      {!loading ? (
        <>
          <Doughnut
            data={
              chartData &&
              chartData.datasets[0].data.find(element => element !== 0)
                ? chartData
                : emptyData
            }
            redraw={false}
            options={{ cutout: '70%', plugins: { legend: { display: false } } }}
          />
          <span></span>
          <span style={boxShadow}>
            {currentCurrency === 'EUR' && <p>€ {euro}</p>}
            {currentCurrency === 'USD' && <p>$ {usd}</p>}
            {currentCurrency === 'UAH' && <p>₴ {balance}</p>}
          </span>
        </>
      ) : (
        <LoaderSpinner />
      )}
    </DonutContainer>
  );
};

export default Chart;
