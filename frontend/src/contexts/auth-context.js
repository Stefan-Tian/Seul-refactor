import React from 'react';
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
  const { loading, error, data } = useQuery(CURRENT_USER);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error!</div>;
  }

  console.log(data);
  return <AuthContext.Provider value={data} {...props} />;
};

const useAuth = () => React.useContext(AuthContext);
export { AuthProvider, useAuth };
