import { Navigate } from 'react-router-dom';
import useAuth from 'ui/hooks/useAuth';

export const RedirectRoute = ({
  component: Component,
  redirectTo = '/home',
}) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
