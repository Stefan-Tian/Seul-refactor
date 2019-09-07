import React from 'react';
import styled from 'styled-components';
import { Box } from '@material-ui/core';
import { teal, grey } from '@material-ui/core/colors';
import AuthenticationForm from './AuthenticationForm';
import checklist from '../images/checklist.svg';
import calendar from '../images/calendar.svg';
import chat from '../images/chat.svg';
import boxShadow from './shared/boxShadow';

const EachLine = styled.span`
  display: inline-block;
  border-bottom: 8px solid rgba(0, 150, 136, 0.6);
  white-space: nowrap;
  line-height: 0.65;
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

const Illustration = styled.img`
  width: 350px;
  height: 350px;
`;

const FeatureDescription = styled.p`
  font-size: 20px;
  padding: 50px;
  font-weight: bold;
  line-height: 1.4;
  text-align: left;
  max-width: 400px;
  border-radius: 15px;
  ${boxShadow}
`;

const Landing = () => (
  <>
    <DecorCircle />
    <Box maxWidth="1200px" padding="100px 10px 10px 10px" margin="0 auto">
      <Box display="flex" justifyContent="space-between" mb="200px">
        <Box display="flex" flexDirection="column">
          <Box mb={3} fontWeight="bold" fontSize="42px">
            Single but organized.
          </Box>
          <Box
            component="p"
            textAlign="left"
            maxWidth="60%"
            lineHeight="1.5"
            fontSize="22px"
            color={grey[800]}
          >
            <EachLine>Seul is a project management app</EachLine>
            <br />
            <EachLine>
              designed specifically for people who work alone.
            </EachLine>
            <br />
            <EachLine>It's best suited for someone</EachLine>
            <br />
            <EachLine>working on their own side projects</EachLine>
            <br />
            <EachLine>yet does not have anyone to collaborate with.</EachLine>
            <br />
            <EachLine>
              (in case it's not obvious enough, that someone is me.)
            </EachLine>
          </Box>
        </Box>
        <AuthenticationForm />
      </Box>
      <Box display="flex" flexDirection="column" justifyContent="space-between">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-around"
          mb="80px"
        >
          <Illustration src={checklist} alt="checklist" />
          <FeatureDescription>
            Seul allows you to manage your tasks under separate projects with
            ease. You can assign priority, status and timeline on each task!
          </FeatureDescription>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-around"
          mb="80px"
        >
          <FeatureDescription>
            In each task, if the timeline is provided, then Seul would
            automatically put the task onto the Gantt chart to help you better
            visualize your schedule.
          </FeatureDescription>
          <Illustration src={calendar} alt="calendar" />
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-around"
          mb="100px"
        >
          <Illustration src={chat} alt="chat" />
          <FeatureDescription>
            Communication is the key to a successful outcome! Using Seul, you
            can chat with yourself and never feel lonely.
          </FeatureDescription>
        </Box>
      </Box>
      <Box width="100%" textAlign="center" fontWeight="bold">
        &copy;Copyright 2019 by{' '}
        <Box component="span" color={teal[500]}>
          Stefan Tian
        </Box>
      </Box>
    </Box>
  </>
);
export default Landing;
