import React from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

const SIGN_UP = gql`
  mutation SignUp($name: String!, $email: String!, $password: String!) {
    signup(name: $name, email: $email, password: $password) {
      id
    }
  }
`;

const LOG_IN = gql`
  mutation LogIn($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
    }
  }
`;

const SignUp = () => {
  let name;
  let email;
  let password;
  const [signUp, { signInData }] = useMutation(SIGN_UP);
  const [logIn, { logInData }] = useMutation(LOG_IN);

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          // signUp({
          //   variables: {
          //     name: name.value,
          //     email: email.value,
          //     password: password.value
          //   }
          // });
          logIn({
            variables: {
              email: email.value,
              password: password.value
            }
          });
          name.value = '';
          email.value = '';
          password.value = '';
        }}
      >
        <input ref={node => (name = node)} />
        <input ref={node => (email = node)} />
        <input ref={node => (password = node)} />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default SignUp;
