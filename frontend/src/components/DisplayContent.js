import React, { useEffect } from 'react';
import { useIsAuthenticated } from '../custom-hooks/auth';

const loadAuthenticatedContent = () => import('./AuthenticatedApp');
const AuthenticatedContent = React.lazy(loadAuthenticatedContent);
const UnAuthenticatedContent = React.lazy(() => import('./UnAuthenticatedApp'));

const DisplayContent = () => {
  const hasUser = useIsAuthenticated();
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
