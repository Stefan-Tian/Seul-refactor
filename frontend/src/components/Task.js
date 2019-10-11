import React, { useState, useCallback } from 'react';
import { Box, Typography, TextField } from '@material-ui/core';
import { teal, blue, red, amber } from '@material-ui/core/colors';
import { useMutation } from '@apollo/react-hooks';
import styled from 'styled-components';
import boxShadow from './shared/boxShadow';
import DropDown from './DropDown';
import DatePicker from './DatePicker';
import { UPDATE_TASK } from '../mutation';
import { EditIcon, EditTitle } from './shared/edit';
import { useDeleteTask } from '../custom-hooks/project';

const statusOptions = [
  {
    text: 'working on it',
    bgColor: blue[500]
  },
  {
    text: 'stuck',
    bgColor: red[600]
  },
  {
    text: 'done',
    bgColor: amber[700]
  }
];

const priorityOptions = [
  {
    text: 'low',
    bgColor: amber[700]
  },
  {
    text: 'medium',
    bgColor: blue[500]
  },
  {
    text: 'high',
    bgColor: red[600]
  }
];

export const ItemContainer = styled(Box)`
  margin-bottom: 10px;
  border-radius: 0 8px 8px 0;
  ${boxShadow}

  &::before {
    display: block;
    content: '';
    min-width: 10px;
    height: auto;
    background-color: ${teal[500]};
    border-radius: 8px 0 0 8px;
    margin-right: 3px;
  }
`;

const Task = ({
  projectId,
  id,
  title,
  status,
  priority,
  startDate,
  endDate
}) => {
  const [edit, setShowEdit] = useState(false);
  const [value, setValue] = useState({
    id,
    title,
    status,
    priority,
    startDate,
    endDate
  });
  const [updateTask] = useMutation(UPDATE_TASK);
  const [deleteTask] = useDeleteTask(projectId, id);
  const handleUpdateTask = useCallback(
    async (field, input) => {
      const variables = { id: value.id };
      switch (field) {
        case 'title':
          variables.title = value.title;
          break;
        case 'status':
          variables.status = input;
          break;
        case 'priority':
          variables.priority = input;
          break;
        case 'date':
          variables.startDate = input.startDate;
          variables.endDate = input.endDate;
          break;
        default:
          return;
      }
      await updateTask({
        variables
      });
      setShowEdit(false);
    },
    [value, updateTask]
  );

  return (
    <ItemContainer display="flex">
      <Box display="flex" width="100%" alignItems="center">
        <EditTitle
          padding="15px"
          mr="auto"
          display="flex"
          alignItems="center"
          width="55%"
        >
          <Box marginRight="auto">
            {edit ? (
              <form>
                <TextField
                  placeholder={title}
                  value={value.title}
                  onChange={e => {
                    setValue({ ...value, title: e.target.value });
                  }}
                />
              </form>
            ) : (
              <Typography noWrap={true}>{value.title}</Typography>
            )}
          </Box>
          {!edit ? (
            <>
              <EditIcon mr="8px" onClick={() => setShowEdit(true)}>
                edit
              </EditIcon>
              <EditIcon
                onClick={() =>
                  deleteTask({
                    variables: {
                      id
                    }
                  })
                }
              >
                delete
              </EditIcon>
            </>
          ) : (
            <>
              <EditIcon mr="8px" onClick={() => handleUpdateTask('title')}>
                check
              </EditIcon>
              <EditIcon onClick={() => setShowEdit(false)}>close</EditIcon>
            </>
          )}
        </EditTitle>
        <Box paddingY="10px">
          <DropDown
            type="status"
            options={statusOptions}
            defaultVal={status}
            handleUpdate={handleUpdateTask}
          />
        </Box>
        <Box paddingY="10px">
          <DropDown
            type="priority"
            options={priorityOptions}
            defaultVal={priority}
            handleUpdate={handleUpdateTask}
          />
        </Box>
        <DatePicker handleUpdate={handleUpdateTask} />
      </Box>
    </ItemContainer>
  );
};

export default Task;
