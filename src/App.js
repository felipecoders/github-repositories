import React from 'react';
import { ThemeProvider } from 'styled-components';

import themes from './themes';
import GlobalStyle from './styles/global';

import Routes from './routes';

function App() {
  return (
    <ThemeProvider theme={themes}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
