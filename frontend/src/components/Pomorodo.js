import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { Box, Button } from '@material-ui/core';
import tomato from '../images/tomato.svg';
import PomodoroForm from './PomodoroForm';

const Tomato = styled.div`
  padding-top: 50px;
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${tomato});
  background-size: cover;
  transform: translateY(-40px);
`;

const Time = styled.div`
  color: hsl(5, 90%, 80%);
  font-size: 80px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const Pomodoro = () => {
  const [focusTime, setFocusTime] = useState(25);
  const [restTime, setRestTime] = useState(5);
  const [status, setStatus] = useState('focus');

  const countDown = useCallback(() => {
    let counter;
    if (status === 'focus') {
      counter = focusTime;
    } else {
      counter = restTime;
    }
    const countInterval = setInterval(() => {
      if (status === 'focus') {
        setFocusTime(prev => prev - 1);
        console.log(counter);
        if (counter === 0) {
          clearInterval(countInterval);
          setStatus('rest');
          setFocusTime(25);
        }
        counter--;
      } else {
        setRestTime(prev => prev - 1);
        if (counter === 0) {
          setStatus('focus');
          setRestTime(5);
          clearInterval(countInterval);
        }
        counter--;
      }
    }, 100);
  }, [status, focusTime, restTime]);

  return (
    <Box width="100%" display="flex" justifyContent="space-around">
      <Tomato>
        {status === 'focus' ? (
          <Time>{focusTime}</Time>
        ) : (
          <Time>{restTime}</Time>
        )}
        <Button onClick={countDown}>start</Button>
      </Tomato>
      <PomodoroForm setFocusTime={setFocusTime} setRestTime={setRestTime} />
    </Box>
  );
};

export default Pomodoro;
