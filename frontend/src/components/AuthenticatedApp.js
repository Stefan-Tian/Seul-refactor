import React from 'react';
import { Container, Box } from '@material-ui/core';
import Project from './Project';

const AuthenticatedApp = () => (
  <Container maxWidth="md">
    <Box paddingY={10}>
      <Project projectName="Rebuild Seul" />
    </Box>
  </Container>
);

export default AuthenticatedApp;
