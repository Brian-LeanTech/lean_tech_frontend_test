// libraries
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

//  styles
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './styles/theme';

//  components
import Routes from './routes/Routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
