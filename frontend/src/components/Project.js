import React, { useState } from 'react';
import {
  List,
  Typography,
  Box,
  TextField,
  Icon,
  CircularProgress
} from '@material-ui/core';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { teal } from '@material-ui/core/colors';
import Task from './Task';
import { PROJECTS } from '../query';

const FatFont = styled(Typography)`
  && {
    font-weight: 500;
  }
`;

const Pointer = styled(Icon)`
  cursor: pointer;
  &&:hover {
    color: ${teal[300]};
  }
`;

const CREATE_TASK = gql`
  mutation CreateTask($projectId: String!, $title: String!) {
    createTask(projectId: $projectId, title: $title) {
      id
      title
    }
  }
`;

const Project = ({ projectId, projectTitle, tasks }) => {
  const [edit, setEdit] = useState(false);
  const [project, setProject] = useState(projectTitle);
  const [createTask, { loading }] = useMutation(CREATE_TASK, {
    update(
      cache,
      {
        data: { createTask }
      }
    ) {
      const data = cache.readQuery({ query: PROJECTS });
      data.projects.forEach(project => {
        if (project.id === projectId) {
          project.tasks.push(createTask);
        }
      });
      cache.writeQuery({
        query: PROJECTS,
        data
      });
    }
  });

  return (
    <Box marginBottom="30px">
      <Box marginLeft="10px" alignItems="center" display="flex">
        <Box
          mr="auto"
          maxWidth="50%"
          onMouseEnter={() => setEdit(true)}
          onMouseLeave={() => setEdit(false)}
        >
          {edit ? (
            <form>
              <TextField
                placeholder={project}
                value={project}
                onChange={e => {
                  setProject(e.target.value);
                }}
              />
            </form>
          ) : (
            <FatFont variant="h5">{project}</FatFont>
          )}
        </Box>
        {loading ? (
          <CircularProgress color="primary" size="24px" />
        ) : (
          <Pointer
            color="primary"
            onClick={() =>
              createTask({
                variables: {
                  projectId,
                  title: 'New Task'
                }
              })
            }
          >
            add_circle
          </Pointer>
        )}
      </Box>
      <List>
        {tasks && tasks.map(task => <Task key={task.id} {...task} />)}
      </List>
    </Box>
  );
};

export default Project;
