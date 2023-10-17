import { useSelector } from 'react-redux';
import {
  selectName,
  selectIsLogin,
  selectIsRefresh,
} from 'redux/registration/selectors';

const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLogin);
  const isRefreshing = useSelector(selectIsRefresh);

  const user = useSelector(selectName);
  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};

export default useAuth;
