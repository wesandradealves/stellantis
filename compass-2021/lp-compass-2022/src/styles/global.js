import { createGlobalStyle } from 'styled-components';
import './fonts/fonts.css';

import Colors from './colors';

const GlobalStyle = createGlobalStyle`
  * {
    border: 0;
    box-sizing: border-box;
    font-family: 'DIN Bold';
    margin: 0;
    outline: none !important;
    padding: 0;
    scroll-behavior: smooth;
  }

  body,
  html {
    background-color: ${Colors.brown};
    color: ${Colors.grey};
    font-size: 16px;
    overflow-x: hidden;


    .pac-container {
      background-color: ${Colors.greyDark};
      padding: 15px;
      margin-top: 5px;
      border-radius: 5px;
      box-shadow: none;
      border: 0;
      z-index: 1000;

    }

    .pac-icon{
      color: ${Colors.terciary};
    }
    .pac-logo:after {
    content: "";
    background-image: none;
}

.pac-item-selected{
  color: green;
}
  
    .pac-matched {
      font-size: 16px;
      color: ${Colors.terciary};
      font-family: 'FuturaPT Book', sans-serif;
    }

    
    .pac-item {
      border-bottom: 1px solid rgba(31, 193, 213, 0.3);
      span:not(.pac-matched){
        color:white;

      }
      &:hover{
        span:not(.pac-matched){
          color: ${Colors.black}
        }
      }
    }

    .pac-item-query {
      font-size: 14px;
      color: ${Colors.white};
      font-family: 'FuturaPT Book', sans-serif;
      padding-top: 10px;
     
    }
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

  p small {
    color: #E4E4E4;
    font-size: 10px;
    font-family: 'DIN Regular';
  }

  button, a {
    cursor: pointer;
  }
`;

export default GlobalStyle;
