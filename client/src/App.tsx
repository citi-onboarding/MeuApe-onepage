import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';



import { Intro } from "./pages";
import { Home } from './pages';
import { Navbar } from './pages';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Navbar />
      <Home />
      <Intro/>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
