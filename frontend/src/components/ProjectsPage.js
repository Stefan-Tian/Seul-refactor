import React from 'react';
import { Box } from '@material-ui/core';
import Projects from './Projects';

const ProjectsPage = ({ data }) => (
  <Box minWidth="990px" maxWidth="1050px" id="my-container">
    <Box paddingY={10}>
      <Projects projects={data.projects} />
    </Box>
  </Box>
);

export default ProjectsPage;
