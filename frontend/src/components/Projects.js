import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import Project from './Project';
import { Box } from '@material-ui/core';
import { PROJECTS } from '../query';

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
      {data.projects.map(({ id, title, tasks }) => (
        <Project key={id} projectId={id} projectTitle={title} tasks={tasks} />
      ))}
    </Box>
  );
};

export default Projects;
