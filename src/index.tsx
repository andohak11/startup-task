import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import TaskProvider from 'providers/Tasks';

import App from './App';
import theme from './theme';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <TaskProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </TaskProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
