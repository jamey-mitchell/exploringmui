import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link'
import JameysAppBar from './app-bar';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={ theme }>
      <JameysAppBar></JameysAppBar>
    </ThemeProvider>
  );
}

export default App;
