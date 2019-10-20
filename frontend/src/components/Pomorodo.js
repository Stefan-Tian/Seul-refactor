import React, { useState } from 'react';
import styled from 'styled-components';
import { Box, Button } from '@material-ui/core';
import tomato from '../images/tomato.svg';
import PomodoroForm from './PomodoroForm';

const Tomato = styled.div`
  width: 300px;
  height: 300px;
  background-image: url(${tomato});
  background-size: cover;
  transform: translateY(-40px);
`;

const Pomodoro = () => {
  const [focusTime, setFocusTime] = useState(25);
  const [restTime, setRestTime] = useState(5);

  return (
    <Box width="100%" display="flex" justifyContent="space-around">
      <Tomato>
        <div>{focusTime}</div>
        <div>{restTime}</div>
        <Button>start</Button>
      </Tomato>
      <PomodoroForm setFocusTime={setFocusTime} setRestTime={setRestTime} />
    </Box>
  );
};

export default Pomodoro;
