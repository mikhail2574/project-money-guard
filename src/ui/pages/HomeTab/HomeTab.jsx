import { Navigation } from 'ui/components/dashboard/Navigation/Navigation';
import { Balance } from 'ui/components/dashboard/Balance/Balance';
import { Currency } from 'ui/components/dashboard/Currency/Currency';
import { TransactionsList } from 'ui/components/home/TransactionsList/TransactionsList';
import { ButtonAddTransactions } from 'ui/components/home/ButtonAddTransactions/ButtonAddTransactions';
import { Header } from 'ui/components/dashboard/Header/Header';

export const HomeTab = () => {
  return (
    <>
      <Header />
      <main>
        <Navigation />
        <Balance />
        <Currency />
        <TransactionsList />
        <ButtonAddTransactions />
      </main>
    </>
  );
};
