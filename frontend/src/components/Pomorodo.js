import React from 'react';
import styled from 'styled-components';
import { Box } from '@material-ui/core';
import tomato from '../images/tomato.svg';

const Tomato = styled.div`
  width: 300px;
  height: 300px;
  background-image: url(${tomato});
  background-size: cover;
  transform: translateY(-40px);
`;

const Pomodoro = () => {
  return (
    <Box width="100%" display="flex" justifyContent="space-around">
      <Tomato />
      <Box component="form">
        <input type="text" placeholder="working for..." />
        <input type="text" placeholder="rest for..." />
      </Box>
    </Box>
  );
};

export default Pomodoro;
