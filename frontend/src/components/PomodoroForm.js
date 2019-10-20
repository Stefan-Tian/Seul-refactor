import React, { useCallback, useRef } from 'react';
import { Box, Button } from '@material-ui/core';

const PomodoroForm = ({ setFocusTime, setRestTime }) => {
  const focusTime = useRef(25);
  const restTime = useRef(5);
  const submitTimeChange = useCallback(() => {
    setFocusTime(focusTime.current.value);
    setRestTime(restTime.current.value);
  }, [focusTime, restTime, setFocusTime, setRestTime]);

  return (
    <Box component="form" onSubmit={submitTimeChange}>
      <input type="number" name="focus" id="focus" ref={focusTime} />
      <input type="number" name="rest" id="rest" ref={restTime} />
      <Button onClick={submitTimeChange}>confirm</Button>
    </Box>
  );
};

export default PomodoroForm;
