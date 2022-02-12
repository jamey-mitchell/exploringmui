import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#4045c9',
      light: '#cecef3',
      dark: '#2b2d8c',
    },
    secondary: {
      main: '#27598b',
      light: '#add7ff',
      dark: '#1b3c64',
    },
    error: {
      main: '#9f2d31',
      light: '#e8b5b7',
      dark: '#6a2021',
    },
  },
});

export default theme;