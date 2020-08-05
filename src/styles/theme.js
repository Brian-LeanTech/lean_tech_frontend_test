import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Roboto',
      'sans-serif',
    ],
  },
  palette: {
    primary: {
      main: '#233B54',
      darkBackground: '#EBEBEB',
    },
    text: {
      secondary: '#fff',
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        a: {
          textDecoration: 'none',
        },
      },
    },
  },
});

export default theme;
