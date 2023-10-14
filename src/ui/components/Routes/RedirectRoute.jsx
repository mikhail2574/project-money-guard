import { Navigate } from 'react-router-dom';
import useAuth from 'ui/hooks/useAuth';
/**
 * - If the use go to "Route" and the user is logged in, render the home component
 * - Otherwise render <Navigate> to redirectTo
 */

export const RedirectRoute = ({
  component: Component,
  redirectTo = '/home',
}) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
