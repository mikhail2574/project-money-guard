import React from 'react';
import { ColorBox, Wrapper } from './StatisticsTable.styled';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/transactions/selectors';
import { LoaderSpinner } from 'ui/components/dashboard/Loader/Loader';

export const colors = [
  { name: 'Main expenses', color: '#FED057' },
  { name: 'Products', color: '#FFD8D0' },
  { name: 'Car', color: '#FD9498' },
  { name: 'Self care', color: '#C5BAFF' },
  { name: 'Child care', color: '#6E78E8' },
  { name: 'Household products', color: '#4A56E2' },
  { name: 'Education', color: '#81E1FF' },
  { name: 'Leisure', color: '#24CCA7' },
  { name: 'Other expenses', color: '#00AD84' },
  { name: 'Entertainment', color: '#FF69B4' },
  { name: 'Income', color: '#FFB627' },
];

const StatisticsTable = ({ statSummary }) => {
  const loading = useSelector(selectIsLoading);
  console.log(statSummary);
  // const mockCategoriesSummary = [
  //   { name: 'Income', type: 'INCOME', total: 35500 },
  //   { name: 'Education', type: 'EXPENSE', total: -10000 },
  //   { name: 'Products', type: 'EXPENSE', total: -2500 },
  //   { name: 'Car', type: 'EXPENSE', total: -7500 },
  //   { name: 'Self care', type: 'EXPENSE', total: -1200 },
  //   { name: 'Leisure', type: 'EXPENSE', total: -800 },
  // ];
  return (
    <Wrapper>
      {!loading ? (
        statSummary.categoriesSummary.length !== 0 ? (
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Sum</th>
              </tr>
            </thead>
            <tbody>
              {statSummary.categoriesSummary?.map(category => {
                const categoryColor = colors.find(
                  color => color.name === category.name
                );
                return (
                  <tr key={category.name}>
                    <td>
                      <ColorBox color={categoryColor.color} />
                      {category.name}
                    </td>
                    <td>{category.total?.toFixed(2)}</td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                Expenses:<td>{statSummary.expenseSummary?.toFixed(2)}</td>
              </tr>
              <tr>
                Income:<td>{statSummary.incomeSummary?.toFixed(2)}</td>
              </tr>
            </tfoot>
          </table>
        ) : (
          <p>
            There are no transactions registered yet. Add them at the Home page.
          </p>
        )
      ) : (
        <LoaderSpinner />
      )}
    </Wrapper>
  );
};

export default StatisticsTable;
