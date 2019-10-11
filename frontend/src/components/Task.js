import React, { useState } from 'react';
import { Box, Typography, TextField } from '@material-ui/core';
import { teal, blue, red, amber } from '@material-ui/core/colors';
import styled from 'styled-components';
import boxShadow from './shared/boxShadow';
import DropDown from './DropDown';
import DatePicker from './DatePicker';

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

const Task = ({ title, status, priority, startDate, endDate }) => {
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState(title);

  return (
    <ItemContainer display="flex">
      <Box display="flex" width="100%" alignItems="center">
        <Box
          padding="15px"
          mr="auto"
          maxWidth="50%"
          onMouseEnter={() => setEdit(true)}
          onMouseLeave={() => setEdit(false)}
        >
          {edit ? (
            <form>
              <TextField
                placeholder={title}
                value={value}
                onChange={e => {
                  setValue(e.target.value);
                }}
              />
            </form>
          ) : (
            <Typography noWrap={true}>{value}</Typography>
          )}
        </Box>
        <Box paddingY="10px">
          <DropDown options={statusOptions} defaultVal={status} />
        </Box>
        <Box paddingY="10px">
          <DropDown options={priorityOptions} defaultVal={priority} />
        </Box>
        <DatePicker />
      </Box>
    </ItemContainer>
  );
};

export default Task;
