import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { Register } from 'ui/pages/RegistrationPage/RegistrationPage';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import { HomeTab } from 'ui/pages/HomeTab/HomeTab';
import NotFoundPage from 'ui/pages/NotFoundPage/NotFoundPage';
import LoginPage from 'ui/pages/LoginPage/LoginPage';
import StatisticsTab from 'ui/pages/StatisticsTab/StatisticsTab';
import { PrivateRoute } from './Routes/PrivateRoute';
import { RedirectRoute } from './Routes/RedirectRoute';
import { useDispatch, useSelector } from 'react-redux';
import { refreshThunk } from 'redux/registration/operation';
import { selectIsRefresh } from 'redux/registration/selectors';
import { LoaderSpinner } from './dashboard/Loader/Loader';
import Layout from './Layout/Layout';
import CurrencyTab from 'ui/pages/CurrencyTab/CurrencyTab';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  const isLoading = useSelector(selectIsRefresh);
  return !isLoading ? (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/"
          element={
            <RedirectRoute component={<Layout children={<HomeTab />} />} />
          }
        />
        <Route
          path="/home"
          element={
            <PrivateRoute
              redirectTo="/login"
              component={<Layout children={<HomeTab />} />}
            />
          }
        />
        <Route
          path="/statistics"
          element={
            <PrivateRoute
              redirectTo="/login"
              component={<Layout children={<StatisticsTab />} />}
            />
          }
        />
        <Route
          path="/currency"
          element={
            <PrivateRoute
              redirectTo="/login"
              component={<Layout children={<CurrencyTab />} />}
            />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  ) : (
    <LoaderSpinner />
  );
};
