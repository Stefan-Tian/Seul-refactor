import React from 'react';
import { List } from '@material-ui/core';
import Task from './Task';

const data = [
  {
    text: 'todo1'
  },
  {
    text: 'todo2'
  }
];

const Project = () => {
  return (
    <List>
      {data.map(({ text }) => (
        <Task key={text} text={text} />
      ))}
    </List>
  );
};

export default Project;
