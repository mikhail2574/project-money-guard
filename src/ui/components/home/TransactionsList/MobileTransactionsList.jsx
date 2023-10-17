import { useDispatch, useSelector } from 'react-redux';
import {
  selectCategories,
  selectTransactions,
} from 'redux/transactions/selectors';
import styled from 'styled-components';
import { MobileTransactionsItem } from '../TransactionsItem/MobileTransactionsItem';
import { deleteTransaction } from 'redux/transactions/operations';
import { useMyContext } from 'context/useMyContext';

const List = styled.li``;

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
      {transactions.map(item => {
        return (
          <MobileTransactionsItem
            key={item.id}
            transactionDate={item.transactionDate}
            type={item.type}
            category={categories.find(cat => cat.id === item.categoryId)}
            comment={item.comment}
            amount={item.amount}
            handleDelete={() => handleDelete(item.id)}
            handleOpen={() => handleOpen(item.id)}
          />
        );
      })}
    </List>
  );
};