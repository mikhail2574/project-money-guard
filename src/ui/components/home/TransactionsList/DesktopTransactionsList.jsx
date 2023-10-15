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
import { useDispatch } from 'react-redux';
import { BiPencil } from 'react-icons/bi';
import { deleteTransaction } from 'redux/transactions/operations';

export const DesktopTransactionsList = ({ transactions }) => {
  // const transactions = useSelector(selectTransactions);
  // const categories = useSelector(selectCategories);
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteTransaction(id));
  };

  return (
    <DesktopTransactionList>
      <li>
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
        {transactions.map(item => {
          return (
            <DesktopTransactionsItem key={item.id}>
              <ItemProperty>{item.transactionDate}</ItemProperty>
              <ItemProperty>{item.type ? '+' : '-'}</ItemProperty>
              <ItemProperty>{item.category}</ItemProperty>
              <ItemProperty>{item.comment}</ItemProperty>
              <ItemProperty $sum={true} $plus={item.type} $align="end">
                {item.amount}
              </ItemProperty>
              <ButtonContainer>
                <EditButton>
                  <BiPencil size={14} />
                </EditButton>
                <DeleteButton onClick={handleDelete(item.id)}>
                  Delete
                </DeleteButton>
              </ButtonContainer>
            </DesktopTransactionsItem>
          );
        })}
      </li>
    </DesktopTransactionList>
  );
};
