import React from 'react';
import ReactDOM from 'react-dom';
import { LiffProvider } from 'react-liff';

import App from './App';

const liffId = '1655315643-O6DqdDE8';
const stubEnabled = process.env.NODE_ENV !== 'production';

ReactDOM.render(
  <React.StrictMode>
    <LiffProvider liffId={liffId} stubEnabled={stubEnabled}>
      <App />
    </LiffProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
