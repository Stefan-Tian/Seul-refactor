import React from 'react';
import { Container, Box } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { teal, grey } from '@material-ui/core/colors';
import Header from './components/Header';
import Project from './components/Project';
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: teal[300],
      main: teal[500],
      dark: teal[700]
    },
    secondary: {
      main: grey[600]
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Container maxWidth="md">
          <Box paddingY={10}>
            <Project projectName="Rebuild Seul" />
          </Box>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
