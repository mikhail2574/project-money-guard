import {
  DeleteButton,
  EditButton,
} from '../TransactionsItem/TransactionsItemStyles';
import {
  ButtonContainer,
  DesktopTransactionList,
  DesktopTransactionsItem,
  HiddenSpan,
  ItemProperty,
  PropertyHeader,
  PropertyHeaderList,
} from './DesktopTransactionsListStyles';
import { useDispatch, useSelector } from 'react-redux';
import { BiPencil } from 'react-icons/bi';
import { deleteTransaction } from 'redux/transactions/operations';
import {
  selectCategories,
  selectTransactions,
} from 'redux/transactions/selectors';
import { useMyContext } from 'context/useMyContext';
import { getInfo } from 'redux/registration/operation';

export const DesktopTransactionsList = () => {
  const transactions = useSelector(selectTransactions);
  const { open, setTypeModal, setId } = useMyContext();
  const categories = useSelector(selectCategories);
  const dispatch = useDispatch();

  const handleOpen = id => {
    open();
    setTypeModal('edit');
    setId(id);
  };

  const handleDelete = id => {
    dispatch(deleteTransaction(id));
    dispatch(getInfo());
  };

  return (
    <DesktopTransactionList>
      <PropertyHeaderList>
        <PropertyHeader>Date</PropertyHeader>
        <PropertyHeader>Type</PropertyHeader>
        <PropertyHeader>Category</PropertyHeader>
        <PropertyHeader>Comment</PropertyHeader>
        <PropertyHeader $align="end">Sum</PropertyHeader>
        <PropertyHeader>
          <HiddenSpan>X</HiddenSpan>
        </PropertyHeader>
      </PropertyHeaderList>
      <div
        style={{
          overflowY: 'auto',
          maxHeight: '400px',
          minHeight: '50px',
        }}
      >
        {transactions.length === 0 ? (
          <div
            style={{ color: 'white', textAlign: 'center', marginTop: '20px' }}
          >
            You don't have any transactions yet
          </div>
        ) : (
          transactions.map(item => {
            return (
              <DesktopTransactionsItem key={item.id}>
                <ItemProperty>{item.transactionDate}</ItemProperty>
                <ItemProperty>
                  {item.type === 'INCOME' ? '+' : '-'}
                </ItemProperty>
                <ItemProperty>
                  {categories.find(cat => cat.id === item.categoryId)?.name}
                </ItemProperty>
                <ItemProperty>{item.comment}</ItemProperty>
                <ItemProperty
                  $sum={true}
                  $plus={item.type === 'INCOME'}
                  $align="end"
                >
                  {item.amount.toFixed(2)}
                </ItemProperty>
                <ButtonContainer>
                  <EditButton onClick={() => handleOpen(item.id)}>
                    <BiPencil size={14} />
                  </EditButton>
                  <DeleteButton onClick={() => handleDelete(item.id)}>
                    Delete
                  </DeleteButton>
                </ButtonContainer>
              </DesktopTransactionsItem>
            );
          })
        )}
      </div>
    </DesktopTransactionList>
  );
};
