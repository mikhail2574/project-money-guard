import { useDispatch, useSelector } from 'react-redux';
import {
  selectCategories,
  selectTransactions,
} from 'redux/transactions/selectors';
import styled from 'styled-components';
import { MobileTransactionsItem } from '../TransactionsItem/MobileTransactionsItem';
import { deleteTransaction } from 'redux/transactions/operations';
import { useMyContext } from 'context/useMyContext';

const List = styled.li`
  display: flex;
  flex-direction: column-reverse;
  padding-bottom: 70px;
`;

export const MobileTransactionsList = () => {
  const transactions = useSelector(selectTransactions);
  const categories = useSelector(selectCategories);
  const dispatch = useDispatch();
  const { open, setTypeModal, setId } = useMyContext();

  const handleOpen = id => {
    open();
    setTypeModal('edit');
    setId(id);
  };

  const handleDelete = id => {
    dispatch(deleteTransaction(id));
  };

  return (
    <List>
      {transactions.length === 0 ? (
        <div style={{ color: 'white', textAlign: 'center', marginTop: '20px' }}>
          You don't have any transactions yet
        </div>
      ) : (
        transactions.map(item => {
          let category = categories.find(cat => cat.id === item.categoryId);
          return (
            <MobileTransactionsItem
              key={item.id}
              transactionDate={item.transactionDate}
              type={item.type}
              category={category || {}}
              comment={item.comment}
              amount={item.amount}
              handleDelete={() => handleDelete(item.id)}
              handleOpen={() => handleOpen(item.id)}
            />
          );
        })
      )}
    </List>
  );
};
