import React, { useState } from 'react';
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
  background-color: ${grey[300]};
  border-radius: 12px;
  margin: 2px 0;
  margin-left: 37px;
`;

const IconContainer = styled(Avatar)`
  && {
    width: 28px;
    height: 28px;
    margin-right: 12px;

    ${({ active, colorPalette }) =>
      active === 1 && colorPalette === 1
        ? `
      background-color: ${teal[100]}
    `
        : active === 2 && colorPalette === 2
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

  return (
    <Box
      marginRight="60px"
      width="200px"
      display="flex"
      paddingY={12}
      flexDirection="column"
      alignItems="flex-start"
    >
      <StyledLink
        exact
        to="/"
        activeStyle={{ color: teal[600] }}
        onClick={() => setActive(1)}
      >
        <IconContainer colorPalette={1} active={active}>
          <NavIcon colorPalette={1} active={active}>
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
        <IconContainer colorPalette={2} active={active}>
          <NavIcon colorPalette={2} active={active}>
            access_time
          </NavIcon>
        </IconContainer>
        <span>Pomodoro</span>
      </StyledLink>
    </Box>
  );
};

export default SideNav;
