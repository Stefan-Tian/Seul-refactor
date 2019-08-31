import React, { useState, useEffect } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const AuthContext = React.createContext();

const CURRENT_USER = gql`
  {
    currentUser {
      name
      email
    }
  }
`;

const AuthProvider = props => {
  const [currentUser, setCurrentUser] = useState(null);
  const { loading, error, data } = useQuery(CURRENT_USER);

  useEffect(() => {
    if (data && data.currentUser) {
      setCurrentUser(data.currentUser);
    }
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error!</div>;
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        updateCurrentUser: user => setCurrentUser(user)
      }}
      {...props}
    />
  );
};

const useAuth = () => React.useContext(AuthContext);
export { AuthProvider, useAuth };
