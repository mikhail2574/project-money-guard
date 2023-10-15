import { ButtonAddTransactions } from 'ui/components/home/ButtonAddTransactions/ButtonAddTransactions';
import { Modal } from 'ui/components/Modal/Modal';
import { Logout } from 'ui/components/dashboard/Logout/Logout';
import { useMyContext } from 'context/useMyContext';
import { AddTransactionForm } from 'ui/components/home/modalWindows/AddTransactionForm/AddTransactionForm';
import { TransactionsList } from 'ui/components/home/TransactionsList/MobileTransactionsList';

export const HomeTab = () => {
  const { isOpen, typeModal } = useMyContext();
  return (
    <>
      <TransactionsList />
      <ButtonAddTransactions />
      {isOpen ? (
        <Modal>
          {typeModal === 'add' ? (
            <AddTransactionForm />
          ) : typeModal === 'exit' ? (
            <Logout />
          ) : (
            ''
          )}
        </Modal>
      ) : null}
    </>
  );
};
