import React from 'react';
import styled from 'styled-components';
import Project from './Project';
import { Box, Icon, Button, CircularProgress } from '@material-ui/core';
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

const Loading = styled(CircularProgress)`
  && {
    color: #6a3093;
  }
`;

const Projects = ({ projects }) => {
  const [createProject, projectLoading] = useCreateProject();

  return (
    <>
      <Box>
        {projects.map(({ id, title, tasks }) => (
          <Project key={id} projectId={id} projectTitle={title} tasks={tasks} />
        ))}
      </Box>
      <Box
        textAlign="right"
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
      >
        {projectLoading ? (
          <Loading size="24px" />
        ) : (
          <>
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
          </>
        )}
      </Box>
    </>
  );
};

export default Projects;
