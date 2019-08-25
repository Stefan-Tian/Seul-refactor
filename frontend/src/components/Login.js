import React, { useState } from 'react';
import gql from 'graphql-tag';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useMutation } from '@apollo/react-hooks';
import { useAuth } from '../contexts/auth-context';
import { useFormField } from '../custom-hooks/form';

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
      name
      email
    }
  }
`;

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too short!!')
    .max(25, 'Too long!!')
    .required('Required')
    .ensure('Not a valid name!'),
  email: Yup.string()
    .email('Invalid Email')
    .required('Required')
    .ensure('Not a valid email!'),
  password: Yup.string()
    .min(5, 'Password needs to be more than 5 digits!')
    .max(20, 'Password needs to be less than 20 digits')
    .required('Required')
    .ensure('Not a valid password!')
});

const initialSignupValues = {
  name: '',
  email: '',
  password: ''
};

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid Email')
    .required('Required')
    .ensure('Not a valid email!'),
  password: Yup.string()
    .min(5, 'Password needs to be more than 5 digits!')
    .max(20, 'Password needs to be less than 20 digits')
    .required('Required')
    .ensure('Not a valid password!')
});

const initialLoginValues = {
  email: '',
  password: ''
};

const SignUp = () => {
  const name = useFormField('');
  const email = useFormField('');
  const password = useFormField('');
  const [signUp] = useMutation(SIGN_UP);
  const [logIn] = useMutation(LOG_IN);
  const [action, setAction] = useState({
    hasAccount: true,
    displayText: 'Need a new account?',
    buttonText: 'login'
  });
  const { updateCurrentUser } = useAuth();

  return (
    <Formik
      initialValues={
        action.hasAccount ? initialLoginValues : initialSignupValues
      }
      validationSchema={action.hasAccount ? LoginSchema : SignupSchema}
      onSubmit={async e => {
        e.preventDefault();
        let user = null;
        if (action.hasAccount) {
          user = await logIn({
            variables: {
              email: email.value,
              password: password.value
            }
          });
        } else {
          user = await signUp({
            variables: {
              name: name.value,
              email: email.value,
              password: password.value
            }
          });
        }
        updateCurrentUser(user);
      }}
      render={({ errors, status, touched, isSubmitting }) => (
        <Form>
          {!action.hasAccount && (
            <>
              <Field type="name" name="name" />
              <ErrorMessage name="name" component="div" />
            </>
          )}
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
          <button type="submit">{action.buttonText}</button>
          <button
            type="button"
            onClick={() => {
              setAction({
                hasAccount: !action.hasAccount,
                displayText: !action.hasAccount
                  ? 'Need a new account?'
                  : 'Already have an account?',
                buttonText: !action.hasAccount ? 'login' : 'signup'
              });
            }}
          >
            {action.displayText}
          </button>
        </Form>
      )}
    />
  );
};

export default SignUp;
