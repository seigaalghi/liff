import React from 'react';
import ReactDOM from 'react-dom';
import { AppContextProvider } from './context/context';
import App from './App';
require('dotenv').config();

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
