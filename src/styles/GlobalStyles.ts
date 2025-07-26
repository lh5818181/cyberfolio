import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;

    @media (max-width: 768px) {
      font-size: 14px;
    }
    @media (max-width: 480px) {
      font-size: 12px;
    }
  }

  body {
    margin: 0;
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
    font-family: 'Inter', sans-serif;
    line-height: 1.6;
  }
`;
