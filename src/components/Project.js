import React, { useState } from 'react';
import { List, Typography, Box, TextField } from '@material-ui/core';
import styled from 'styled-components';
import Task from './Task';

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
  const [project, setProject] = useState(projectName);
  return (
    <>
      <Box
        marginLeft="10px"
        maxWidth="50%"
        onMouseEnter={() => setEdit(true)}
        onMouseLeave={() => setEdit(false)}
        display="flex"
        alignItems="center"
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
          <FatFont fontWeight variant="h5">
            {project}
          </FatFont>
        )}
      </Box>
      <List>
        {data.map(({ text }) => (
          <Task key={text} text={text} />
        ))}
      </List>
    </>
  );
};

export default Project;
