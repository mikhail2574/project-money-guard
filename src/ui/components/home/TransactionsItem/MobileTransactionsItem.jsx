import { BiPencil } from 'react-icons/bi';
import {
  CardItem,
  DeleteButton,
  EditButton,
  EditText,
  ItemProperty,
  ItemPropertyHeader,
  TransactionCard,
} from './TransactionsItemStyles';

export const MobileTransactionsItem = ({
  transactionDate,
  type,
  category,
  comment,
  amount,
  handleDelete,
}) => {
  return (
    <TransactionCard>
      <CardItem>
        <ItemPropertyHeader>Date</ItemPropertyHeader>
        <ItemProperty>{transactionDate}</ItemProperty>
      </CardItem>
      <CardItem>
        <ItemPropertyHeader>Type</ItemPropertyHeader>
        <ItemProperty>{type ? '+' : '-'}</ItemProperty>
      </CardItem>
      <CardItem>
        <ItemPropertyHeader>Category</ItemPropertyHeader>
        <ItemProperty>{category}</ItemProperty>
      </CardItem>
      <CardItem>
        <ItemPropertyHeader>Comment</ItemPropertyHeader>
        <ItemProperty>{comment}</ItemProperty>
      </CardItem>
      <CardItem>
        <ItemPropertyHeader>Sum</ItemPropertyHeader>
        <ItemProperty $sum={true} $plus={type}>
          {amount}
        </ItemProperty>
      </CardItem>
      <CardItem>
        <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
        <EditButton>
          <BiPencil size={14} /> <EditText>Edit</EditText>
        </EditButton>
      </CardItem>
    </TransactionCard>
  );
};
