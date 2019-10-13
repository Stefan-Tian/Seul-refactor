import React, { useState, useCallback } from 'react';
import {
  List,
  Typography,
  Box,
  TextField,
  Icon,
  CircularProgress
} from '@material-ui/core';
import moment from 'moment';
import { useMutation } from '@apollo/react-hooks';
import styled from 'styled-components';
import { teal } from '@material-ui/core/colors';
import Task from './Task';
import { UPDATE_PROJECT } from '../mutation';
import { EditIcon, EditTitle } from './shared/edit';
import { useCreateTask, useDeleteProject } from '../custom-hooks/project';

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

const Project = ({ projectId, projectTitle, tasks }) => {
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState(projectTitle);
  const [deleteProject] = useDeleteProject(projectId);
  const [updateProject] = useMutation(UPDATE_PROJECT);
  const handleUpdateProject = useCallback(() => {
    updateProject({
      variables: {
        id: projectId,
        title
      }
    });
    setEdit(false);
  }, [updateProject, setEdit, title, projectId]);
  const [createTask, loading] = useCreateTask(projectId);
  console.log('project rendered');

  return (
    <Box marginBottom="30px">
      <Box marginLeft="10px" alignItems="center" display="flex">
        <EditTitle mr="auto" maxWidth="50%" display="flex" alignItems="center">
          <Box mr="12px">
            {edit ? (
              <form>
                <TextField
                  placeholder={title}
                  value={title}
                  onChange={e => {
                    setTitle(e.target.value);
                  }}
                />
              </form>
            ) : (
              <FatFont variant="h5">{title}</FatFont>
            )}
          </Box>
          {!edit ? (
            <>
              <EditIcon mr="8px" onClick={() => setEdit(true)}>
                edit
              </EditIcon>
              <EditIcon
                onClick={() => deleteProject({ variables: { id: projectId } })}
              >
                delete
              </EditIcon>
            </>
          ) : (
            <>
              <EditIcon mr="8px" onClick={handleUpdateProject}>
                check
              </EditIcon>
              <EditIcon onClick={() => setEdit(false)}>close</EditIcon>
            </>
          )}
        </EditTitle>
        {loading ? (
          <CircularProgress color="primary" size="24px" />
        ) : (
          <Pointer
            color="primary"
            onClick={() =>
              createTask({
                variables: {
                  projectId,
                  title: 'New Task',
                  status: 0,
                  priority: 0,
                  startDate: moment(),
                  endDate: moment().add(1, 'days')
                }
              })
            }
          >
            add_circle
          </Pointer>
        )}
      </Box>
      <List>
        {tasks &&
          tasks.map(task => (
            <Task key={task.id} {...task} projectId={projectId} />
          ))}
      </List>
    </Box>
  );
};

export default Project;
