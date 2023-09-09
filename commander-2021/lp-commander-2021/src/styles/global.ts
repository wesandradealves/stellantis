import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    border: 0;
    box-sizing: border-box;
    font-family: ${props => props.theme.fonts.futura.medium},
      sans-serif;
    margin: 0;
    outline: none !important;
    padding: 0;
    scroll-behavior: smooth;
  }

  body,
  html {
    background-color: ${props => props.theme.colors.grey.light};
    color: ${props => props.theme.colors.grey.dark};
    font-size: 16px;
    font-weight: 400;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  textarea {
    resize: none;
  }

  button,
  a {
    cursor: pointer;
  }
`;

export default GlobalStyle;
