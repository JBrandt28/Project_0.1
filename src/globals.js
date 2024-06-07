// globals.js
import { createGlobalStyle } from 'styled-components';

const GlobalTheme = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background-color: ${({ theme }) => theme.bodyBackgroundColor};
    color: ${({ theme }) => theme.textColor};
  }
`;

export default GlobalTheme;
