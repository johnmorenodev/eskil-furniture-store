import './App.css';
import Home from './pages/Home';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './utils/ThemeProvider';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
