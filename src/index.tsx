import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from './Calendar';
import { GlobalStyle } from './styles/GlobalStyle';

ReactDOM.render(
  <React.StrictMode>
    <Calendar />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);
