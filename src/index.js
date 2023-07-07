import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Reset } from 'styled-reset'
import { GlobalStyle } from './globalStyles';
import { ContextProvider } from './context/ContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <Reset />
      <GlobalStyle />
      <App />
    </ContextProvider>
  </React.StrictMode>
);

