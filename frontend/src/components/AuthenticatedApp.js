import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Container, Box } from '@material-ui/core';
import Projects from './Projects';
import Timeline from './Timeline';
import { PROJECTS } from '../query';

const AuthenticatedApp = () => {
  const { loading, error, data } = useQuery(PROJECTS);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something went terribly wrong.</div>;
  }

  return (
    <>
      <Timeline projects={data.projects} />
      <Container maxWidth="md">
        <Box paddingY={10}>
          <Projects projects={data.projects} />
        </Box>
      </Container>
    </>
  );
};

export default AuthenticatedApp;
