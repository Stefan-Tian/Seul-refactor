import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { Box } from '@material-ui/core';
import ProjectsPage from './ProjectsPage';
import Timeline from './Timeline';
import Pomodoro from './Pomorodo';
import SideNav from './SideNav';
import { PROJECTS } from '../query';

const AuthenticatedApp = () => {
  const { loading, error, data } = useQuery(PROJECTS);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something went terribly wrong.</div>;
  }

  return (
    <>
      <Router>
        <Timeline projects={data.projects} />
        <Box
          display="flex"
          maxWidth="1400px"
          paddingY={8}
          paddingX={4}
          margin="0 auto"
        >
          <SideNav />
          <Switch>
            <Route exact path="/">
              <ProjectsPage data={data} />
            </Route>
            <Route path="/pomodoro">
              <Pomodoro />
            </Route>
          </Switch>
        </Box>
      </Router>
    </>
  );
};

export default AuthenticatedApp;
