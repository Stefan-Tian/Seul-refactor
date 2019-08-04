import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuButton from '@material-ui/icons/Menu';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import Box from './styled/Box';

const StyledAppBar = styled(AppBar)`
  && {
    background-color: #fbfbfb;
    box-shadow: none;
  }
`;

const Brand = styled(Typography)`
  && {
    font-weight: 700;
  }
`;

const Header = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const toggleSidebar = open => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpenSidebar(open);
  };
  return (
    <>
      <StyledAppBar position="sticky">
        <Toolbar>
          <IconButton edge="start" onClick={toggleSidebar(true)}>
            <MenuButton />
          </IconButton>
          <Box component="span" mr="auto">
            <Brand color="primary" variant="h5">
              Seul
            </Brand>
          </Box>
          <Button>login</Button>
        </Toolbar>
      </StyledAppBar>
      <Sidebar openSidebar={openSidebar} toggleSidebar={toggleSidebar} />
    </>
  );
};

export default Header;
