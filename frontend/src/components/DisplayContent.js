import React, { useEffect } from 'react';
import { useAuth } from '../contexts/auth-context';

const loadAuthenticatedContent = () => import('./AuthenticatedApp');
const AuthenticatedContent = React.lazy(loadAuthenticatedContent);
const UnAuthenticatedContent = React.lazy(() => import('./UnAuthenticatedApp'));

const DisplayContent = () => {
  const hasUser = useAuth();
  // pre-load authenticated stuff when user is filling out the login form,
  // learned from kent c dodds
  useEffect(() => {
    loadAuthenticatedContent();
  }, []);
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      {hasUser ? <AuthenticatedContent /> : <UnAuthenticatedContent />}
    </React.Suspense>
  );
};

export default DisplayContent;
