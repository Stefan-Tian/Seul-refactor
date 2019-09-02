import React, { useState, useCallback } from 'react';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { Button, Icon } from '@material-ui/core';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useMutation } from '@apollo/react-hooks';
import { useAuth } from '../contexts/auth-context';
import { useFormField } from '../custom-hooks/form';
import FormikTextField from './FormikTextField';
import boxShadow from './shared/boxShadow';

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

const SeulForm = styled(Form)`
  position: relative;
  z-index: 5;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  min-width: 600px;
  padding: 30px 50px;
  border-radius: 15px;
  ${boxShadow}
`;

const ButtonGroup = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`;

const Error = styled.div`
  color: red;
  display: flex;
  align-items: center;
`;

const ErrorIcon = styled(Icon)`
  margin-right: 4px;
  && {
    font-size: 17px;
  }
`;

const AuthenticationForm = () => {
  const name = useFormField('');
  const email = useFormField('');
  const password = useFormField('');
  const [signUp] = useMutation(SIGN_UP);
  const [logIn] = useMutation(LOG_IN);
  const [initialValues, setInitialValues] = useState({
    email: '',
    password: ''
  });
  const [action, setAction] = useState({
    hasAccount: true,
    displayText: 'Need a new account?',
    buttonText: 'login',
    title: 'LOGIN'
  });
  const { updateCurrentUser } = useAuth();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={action.hasAccount ? LoginSchema : SignupSchema}
      onSubmit={async values => {
        let user = null;
        console.log(values);
        if (action.hasAccount) {
          user = await logIn({
            variables: {
              email: values.email,
              password: values.password
            }
          });
        } else {
          user = await signUp({
            variables: {
              name: values.name,
              email: values.email,
              password: values.password
            }
          });
        }
        updateCurrentUser(user);
      }}
      render={({ errors }) => (
        <SeulForm>
          <h3>{action.title}</h3>
          {!action.hasAccount && (
            <>
              <Field
                type="name"
                component={FormikTextField}
                name="name"
                error={errors && errors.name}
              />
              <ErrorMessage name="name">
                {msg => (
                  <Error>
                    <ErrorIcon fontSize="small" color="error">
                      error
                    </ErrorIcon>
                    {msg}
                  </Error>
                )}
              </ErrorMessage>
            </>
          )}
          <Field
            type="email"
            component={FormikTextField}
            name="email"
            error={errors && errors.email}
          />
          <ErrorMessage name="email">
            {msg => (
              <Error>
                <ErrorIcon fontSize="small" color="error">
                  error
                </ErrorIcon>
                {msg}
              </Error>
            )}
          </ErrorMessage>
          <Field
            type="password"
            component={FormikTextField}
            name="password"
            error={errors && errors.password}
          />
          <ErrorMessage name="password">
            {msg => (
              <Error>
                <ErrorIcon fontSize="small" color="error">
                  error
                </ErrorIcon>
                {msg}
              </Error>
            )}
          </ErrorMessage>
          <ButtonGroup>
            <Button type="submit">{action.buttonText}</Button>
            <Button
              type="button"
              onClick={() => {
                setAction({
                  hasAccount: !action.hasAccount,
                  displayText: !action.hasAccount
                    ? 'Need a new account?'
                    : 'Already have an account?',
                  buttonText: !action.hasAccount ? 'login' : 'signup',
                  title: !action.hasAccount ? 'LOGIN' : 'SIGNUP'
                });
                if (action.hasAccount) {
                  setInitialValues({ email: '', password: '' });
                } else {
                  setInitialValues(() => ({
                    name: '',
                    ...initialValues
                  }));
                }
                console.log(initialValues);
              }}
            >
              {action.displayText}
            </Button>
          </ButtonGroup>
        </SeulForm>
      )}
    />
  );
};

export default AuthenticationForm;
