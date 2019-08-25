import { useAuth } from '../contexts/auth-context';

export const useIsAuthenticated = () => {
  const data = useAuth();
  return data.currentUser ? true : false;
};
