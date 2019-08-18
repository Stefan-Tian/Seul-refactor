import React from 'react';
import { Container, Box } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { teal, grey } from '@material-ui/core/colors';
import { AuthProvider } from './contexts/auth-context';
import Header from './components/Header';
import Project from './components/Project';
import Login from './components/Login';
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
      <AuthProvider>
        <div className="App">
          <Header />
          <Container maxWidth="md">
            <Box paddingY={10}>
              <Project projectName="Rebuild Seul" />
            </Box>
          </Container>
          <Login />
        </div>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
