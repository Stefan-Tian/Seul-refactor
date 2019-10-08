import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Project from './Project';
import { Box } from '@material-ui/core';

const PROJECTS = gql`
  {
    projects {
      id
      title
    }
  }
`;

const Projects = () => {
  const { loading, error, data } = useQuery(PROJECTS);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something went terribly wrong.</div>;
  }

  return (
    <Box>
      {data.projects.map(({ id, title }) => (
        <Project id={id} projectID={id} projectTitle={title} />
      ))}
    </Box>
  );
};

export default Projects;
