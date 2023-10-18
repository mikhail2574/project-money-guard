import React from 'react';
import {
  Section,
  StyledTable,
  TdCategory,
  TdColor,
  TdSum,
  TdType,
  ThCategory,
  ThSum,
  Thead,
  TotalExp,
  TotalInc,
} from './StatisticsTable.styled';
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
  if (
    !statSummary ||
    !statSummary.categoriesSummary ||
    statSummary.categoriesSummary.length === 0
  ) {
    return;
  }

  return (
    <Section>
      {!loading ? (
        <StyledTable>
          <Thead>
            <tr>
              <ThCategory>Category</ThCategory>
              <ThSum>Sum</ThSum>
            </tr>
          </Thead>
          <tbody>
            {statSummary.categoriesSummary?.map(category => {
              const categoryColor = colors.find(
                color => color.name === category.name
              );
              return (
                <tr key={category.name}>
                  <TdCategory>
                    <TdColor color={categoryColor.color} />
                    <span>{category.name}</span>
                  </TdCategory>
                  <TdSum>{category.total?.toFixed(2)}</TdSum>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <TdType>Expenses:</TdType>
              <TotalExp>{statSummary.expenseSummary?.toFixed(2)}</TotalExp>
            </tr>
            <tr>
              <TdType>Income:</TdType>
              <TotalInc>{statSummary.incomeSummary?.toFixed(2)}</TotalInc>
            </tr>
          </tfoot>
        </StyledTable>
      ) : (
        <LoaderSpinner />
      )}
    </Section>
  );
};

export default StatisticsTable;
