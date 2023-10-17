import { ButtonAddTransactions } from 'ui/components/home/ButtonAddTransactions/ButtonAddTransactions';
import { Modal } from 'ui/components/Modal/Modal';
import { Logout } from 'ui/components/dashboard/Logout/Logout';
import { useMyContext } from 'context/useMyContext';
import { AddTransactionForm } from 'ui/components/home/modalWindows/AddTransactionForm/AddTransactionForm';
import { DesktopTransactionsList } from 'ui/components/home/TransactionsList/DesktopTransactionsList';
import { useMediaQuery } from 'react-responsive';
import { MobileTransactionsList } from 'ui/components/home/TransactionsList/MobileTransactionsList';
import { EditTransactionForm } from 'ui/components/home/modalWindows/EditTransactionForm/EditTransactionForm';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  fetchCategories,
  fetchTransactions,
} from 'redux/transactions/operations';

export const HomeTab = () => {
  const { isOpen, typeModal } = useMyContext();
  const dispatch = useDispatch();
  const isDesktopOrTablet = useMediaQuery({
    query: '(min-width: 768px)',
  });
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });

  useEffect(() => {
    dispatch(fetchTransactions());
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <>
      {isMobile && <MobileTransactionsList />}
      {isDesktopOrTablet && <DesktopTransactionsList />}
      <ButtonAddTransactions />
      {isOpen ? (
        <Modal>
          {typeModal === 'add' ? (
            <AddTransactionForm />
          ) : typeModal === 'exit' ? (
            <Logout />
          ) : typeModal === 'edit' ? (
            <EditTransactionForm />
          ) : (
            ''
          )}
        </Modal>
      ) : null}
    </>
  );
};
