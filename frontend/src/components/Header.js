import React, { useState, useEffect, useCallback } from 'react';
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

const SeulHeader = styled(AppBar)`
  && {
    background-color: ${({ background }) => background};
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
  const [bgColor, setBgColor] = useState('rgba(0, 0, 0, 0)');
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

  useEffect(() => {
    if (!hasUser) {
      setBgColor('rgba(0, 0, 0, 0)');
    } else {
      setBgColor('#fbfbfb');
    }
  }, [hasUser, setBgColor]);

  const handleScroll = useCallback(() => {
    if (window.scrollY > 10) {
      setBgColor('#fbfbfb');
    } else {
      setBgColor('rgba(0, 0, 0, 0)');
    }
  }, [setBgColor]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      <SeulHeader position="sticky" background={bgColor}>
        <Toolbar>
          {hasUser && (
            <IconButton edge="start" onClick={toggleSidebar(true)}>
              <MenuButton />
            </IconButton>
          )}
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
      </SeulHeader>
      <Sidebar openSidebar={openSidebar} toggleSidebar={toggleSidebar} />
    </>
  );
};

export default Header;
