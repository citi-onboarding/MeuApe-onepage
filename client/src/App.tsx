import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';
/*import GlobalFonts from './fonts/fonts';*/



import { Intro } from "./pages";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Intro/>
      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;
