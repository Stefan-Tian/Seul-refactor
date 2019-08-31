import React from 'react';
import styled from 'styled-components';
import { Typography, Grid, Box } from '@material-ui/core';
import { teal, grey } from '@material-ui/core/colors';
import AuthenticationForm from './AuthenticationForm';

const ContentContainer = styled.div`
  /* max-width: 1100px; */
  padding: 100px 100px 10px 100px;
  margin: 0 auto;
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
`;

const Description = styled.p`
  text-align: left;
  max-width: 60%;
  line-height: 1.5;
  font-size: 20px;
  color: ${grey[800]};
`;

const DecorCircle = styled.span`
  position: absolute;
  right: 0;
  top: 0;
  min-width: 55vw;
  min-height: 85vh;
  -webkit-clip-path: circle(70% at 70% 20%);
  clip-path: circle(70% at 70% 20%);
  background-color: ${teal[500]};
`;

const Landing = () => (
  <>
    <DecorCircle />
    <ContentContainer>
      <TopSection>
        <Intro>
          <Box mb={3} fontWeight="bold" fontSize="42px">
            Single but organized.
          </Box>
          <Description>
            Seul is a project management app designed specifically for people
            who work alone. It's best suited for someone working on their own
            side projects yet does not have anyone to collaborate with. (in case
            it's not obvious enough, that someone is me.)
          </Description>
        </Intro>
        <AuthenticationForm />
      </TopSection>
    </ContentContainer>
  </>
);

export default Landing;
