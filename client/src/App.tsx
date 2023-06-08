import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';


import { Footer, Intro, Home, Client } from "./pages";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
      <Intro />
      <Client />
      <Footer />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
