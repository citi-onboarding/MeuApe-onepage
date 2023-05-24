import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {

    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width:720px) {
      font-size: 87.5%;
    }
  }

  body {
    background-image: url(${(props) => props.theme.colors.background});
    background-repeat: no-repeat;
    background-size: cover;
    color: ${(props) => props.theme.colors.text};
    -webkit-font-smoothing: antialiased;
    font-family: 'Nunito', Courier, monospace, sans-serif;
  }

  button {
    cursor: pointer;
  }
  
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;