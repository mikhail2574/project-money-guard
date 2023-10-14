import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { Register } from 'ui/pages/RegistrationPage/RegistrationPage';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import { HomeTab } from 'ui/pages/HomeTab/HomeTab';
import NotFoundPage from 'ui/pages/NotFoundPage/NotFoundPage';
import LoginPage from 'ui/pages/LoginPage/LoginPage';
import { PrivateRoute } from './Routes/PrivateRoute';
import { RedirectRoute } from './Routes/RedirectRoute';
import { useDispatch } from 'react-redux';
import { refreshThunk } from 'redux/registration/operation';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<RedirectRoute component={<HomeTab />} />} />
        <Route
          path="/home"
          element={<PrivateRoute redirectTo="/login" component={<HomeTab />} />}
        />
        <Route
          path="/statistics"
          element={<PrivateRoute redirectTo="/login" component={<HomeTab />} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};
