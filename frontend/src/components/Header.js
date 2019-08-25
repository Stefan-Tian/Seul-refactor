import React, { useState, useCallback } from 'react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { AppBar, Toolbar, Button, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuButton from '@material-ui/icons/Menu';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import Box from './styled/Box';
import { useAuth } from '../contexts/auth-context';
import { useIsAuthenticated } from '../custom-hooks/auth';

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

const LOG_OUT = gql`
  mutation LogOut {
    logout
  }
`;

const Header = () => {
  const hasUser = useIsAuthenticated();
  const { updateCurrentUser } = useAuth();
  const [logout] = useMutation(LOG_OUT);
  const [openSidebar, setOpenSidebar] = useState(false);
  const onLogOut = useCallback(async () => {
    await logout();
    updateCurrentUser(null);
  }, [logout, updateCurrentUser]);
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
          {hasUser ? (
            <Button onClick={onLogOut}>logout</Button>
          ) : (
            <Button>sign in</Button>
          )}
        </Toolbar>
      </StyledAppBar>
      <Sidebar openSidebar={openSidebar} toggleSidebar={toggleSidebar} />
    </>
  );
};

export default Header;
