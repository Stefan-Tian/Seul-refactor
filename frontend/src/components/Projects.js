import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';
import Project from './Project';
import { Box, Icon, Button } from '@material-ui/core';
import { PROJECTS } from '../query';
import { useCreateProject } from '../custom-hooks/project';

const NewProjectButton = styled(Button)`
  &&.MuiButton-contained {
    min-width: 55px;
    color: white;
    background: linear-gradient(to right, #6a3093, #6e48aa);

    &:hover {
      background: linear-gradient(to right, #78449d, #7c5ab2);
      box-shadow: 4px 3px 15px -5px rgba(94, 93, 94, 0.77);
    }
  }
`;

const Projects = () => {
  const { loading, error, data } = useQuery(PROJECTS);
  const [createProject] = useCreateProject();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something went terribly wrong.</div>;
  }

  return (
    <>
      <Box>
        {data.projects.map(({ id, title, tasks }) => (
          <Project key={id} projectId={id} projectTitle={title} tasks={tasks} />
        ))}
      </Box>
      <Box textAlign="right">
        <NewProjectButton
          variant="contained"
          onClick={() =>
            createProject({
              variables: {
                title: 'New Project'
              }
            })
          }
        >
          <Icon>add</Icon>
        </NewProjectButton>
      </Box>
    </>
  );
};

export default Projects;
