import React, { useState, useEffect } from 'react';
import { Box, Avatar, Icon } from '@material-ui/core';
import { grey, teal, red } from '@material-ui/core/colors';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: ${grey[400]};
  font-weight: 700;
  font-size: 18px;
  padding: 8px 24px;
  display: flex;
  align-items: center;
`;

const VerticalLine = styled.span`
  display: inline-block;
  height: 60px;
  width: 2px;
  background-color: ${grey[100]};
  border-radius: 12px;
  margin: 2px 0;
  margin-left: 37px;
`;

const IconContainer = styled(Avatar)`
  && {
    width: 28px;
    height: 28px;
    margin-right: 12px;

    ${({ active, colorpalette }) =>
      active === 1 && colorpalette === 1
        ? `
      background-color: ${teal[100]}
    `
        : active === 2 && colorpalette === 2
        ? `
      background-color: ${red[200]}
    `
        : `
      background-color: ${grey[300]}
    `}
  }
`;

const NavIcon = styled(Icon)`
  && {
    font-size: 18px;
  }
`;

const SideNav = () => {
  const [active, setActive] = useState(1);

  useEffect(() => {
    const currentPath = window.location.pathname;
    switch (currentPath) {
      case '/pomodoro':
        setActive(2);
        break;
      default:
        setActive(1);
        return;
    }
  }, [active]);

  return (
    <Box
      marginRight="60px"
      width="200px"
      display="flex"
      paddingLeft="30px"
      flexDirection="column"
      alignItems="flex-start"
    >
      <StyledLink
        exact
        to="/"
        activeStyle={{ color: teal[600] }}
        onClick={() => setActive(1)}
      >
        <IconContainer colorpalette={1} active={active}>
          <NavIcon colorpalette={1} active={active}>
            assignment
          </NavIcon>
        </IconContainer>
        <span>Projects</span>
      </StyledLink>
      <VerticalLine />
      <StyledLink
        exact
        to="/pomodoro"
        activeStyle={{ color: red[500] }}
        onClick={() => setActive(2)}
      >
        <IconContainer colorpalette={2} active={active}>
          <NavIcon colorpalette={2} active={active}>
            access_time
          </NavIcon>
        </IconContainer>
        <span>Pomodoro</span>
      </StyledLink>
    </Box>
  );
};

export default SideNav;
