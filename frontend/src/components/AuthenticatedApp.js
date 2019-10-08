import React from 'react';
import { Container, Box } from '@material-ui/core';
import Projects from './Projects';

const AuthenticatedApp = () => (
  <Container maxWidth="md">
    <Box paddingY={10}>
      <Projects />
    </Box>
  </Container>
);

export default AuthenticatedApp;
