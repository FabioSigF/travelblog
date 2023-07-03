import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Reset } from 'styled-reset'
import { GlobalStyle } from './globalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Reset />
    <GlobalStyle />
    <App />
  </React.StrictMode>
);

