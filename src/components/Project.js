import React, { useState } from 'react';
import { List, Typography, Box, TextField, Icon } from '@material-ui/core';
import styled from 'styled-components';
import Task from './Task';
import NewTask from './NewTask';

const FatFont = styled(Typography)`
  && {
    font-weight: 500;
  }
`;

const data = [
  {
    text: 'todo1'
  },
  {
    text: 'todo2'
  }
];

const Project = ({ projectName }) => {
  const [edit, setEdit] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [project, setProject] = useState(projectName);
  return (
    <>
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
        {showNew ? (
          <Icon color="primary" onClick={() => setShowNew(false)}>
            clear
          </Icon>
        ) : (
          <Icon color="primary" onClick={() => setShowNew(true)}>
            add_circle
          </Icon>
        )}
      </Box>
      <List>
        {showNew && <NewTask />}
        {data.map(({ text }) => (
          <Task key={text} text={text} />
        ))}
      </List>
    </>
  );
};

export default Project;
