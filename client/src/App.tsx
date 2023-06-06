import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';


import { Footer, Intro, Home, CB } from "./pages";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
      <Intro />
      <CB />
      <Footer />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
