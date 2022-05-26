import React from 'react';
import ReactDOM from 'react-dom/client';
import cssVariables from './components/css_variables.json';
import { createGlobalStyle } from 'styled-components';
import {App} from './App';

const variable = cssVariables.variable;

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Noto Sans", sans-serif;
  color: ${variable.clrGray500};
}
`;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);

