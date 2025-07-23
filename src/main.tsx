import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
