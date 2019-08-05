import React, { useState } from 'react';
import { TextField, Box } from '@material-ui/core';
import { ItemContainer } from './Task';
import styled, { keyframes } from 'styled-components';
import boxShadow from './shared/boxShadow';

const fadeIn = keyframes`
  0% {
    min-height: 0;
    opacity: 0;
    box-shadow: none;
  }
  100% {
    min-height: 100%;
    opacity: 1;
    ${boxShadow}
  }
`;

const NewItemContainer = styled(ItemContainer)`
  animation-name: ${fadeIn};
  animation-duration: 1.5s;
  animation-timing-function: ease;
  animation-delay: 0s;
`;

const NewTask = () => {
  const [value, setValue] = useState('');
  return (
    <NewItemContainer width="55%" display="flex">
      <Box padding="15px" width="100%">
        <form>
          <TextField
            fullWidth
            value={value}
            onChange={e => setValue(e.target.value)}
          />
        </form>
      </Box>
    </NewItemContainer>
  );
};

export default NewTask;
