import {Home} from './pages/Home';
import {GlobalStyle} from './services/styles/globalStyle';
import {theme} from './services/styles/theme';
import {ThemeProvider} from 'styled-components';

export function App() {
 return (
  <ThemeProvider theme={theme}>
   <GlobalStyle />
   <Home />
  </ThemeProvider>
 );
}

