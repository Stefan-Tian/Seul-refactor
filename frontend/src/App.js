import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { teal, grey } from '@material-ui/core/colors';
import { AuthProvider } from './contexts/auth-context';
import Header from './components/Header';
import DisplayContent from './components/DisplayContent';
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
          <DisplayContent />
        </div>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
