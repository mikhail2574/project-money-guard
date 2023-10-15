import { Navigation } from 'ui/components/dashboard/Navigation/Navigation';
import { Balance } from 'ui/components/dashboard/Balance/Balance';
import { Currency } from 'ui/components/dashboard/Currency/Currency';
import { TransactionsList } from 'ui/components/home/TransactionsList/TransactionsList';
import { ButtonAddTransactions } from 'ui/components/home/ButtonAddTransactions/ButtonAddTransactions';
import { Header } from 'ui/components/dashboard/Header/Header';
import { Modal } from 'ui/components/Modal/Modal';
import { Logout } from 'ui/components/dashboard/Logout/Logout';
import { useMyContext } from 'context/useMyContext';
import { AddTransactionForm } from 'ui/components/home/modalWindows/AddTransactionForm/AddTransactionForm';
import { MainContainer } from './HomeTab.styled';

export const HomeTab = () => {
  const { isOpen, typeModal } = useMyContext();
  return (
    <>
      <Header />
      <MainContainer>
        <Navigation />
        <Balance />
        <Currency />
        <TransactionsList />
        <ButtonAddTransactions />
      </MainContainer>
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
