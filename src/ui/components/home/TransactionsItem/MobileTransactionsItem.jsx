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
  handleOpen,
}) => {
  return (
    <TransactionCard>
      <CardItem>
        <ItemPropertyHeader>Date</ItemPropertyHeader>
        <ItemProperty>{transactionDate}</ItemProperty>
      </CardItem>
      <CardItem>
        <ItemPropertyHeader>Type</ItemPropertyHeader>
        <ItemProperty>{type === 'INCOME' ? '+' : '-'}</ItemProperty>
      </CardItem>
      <CardItem>
        <ItemPropertyHeader>Category</ItemPropertyHeader>
        <ItemProperty>{category.name}</ItemProperty>
      </CardItem>
      <CardItem>
        <ItemPropertyHeader>Comment</ItemPropertyHeader>
        <ItemProperty>{comment}</ItemProperty>
      </CardItem>
      <CardItem>
        <ItemPropertyHeader>Sum</ItemPropertyHeader>
        <ItemProperty $sum={true} $plus={type === 'INCOME'}>
          {amount}
        </ItemProperty>
      </CardItem>
      <CardItem>
        <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
        <EditButton onClick={handleOpen}>
          <BiPencil size={14} /> <EditText>Edit</EditText>
        </EditButton>
      </CardItem>
    </TransactionCard>
  );
};
