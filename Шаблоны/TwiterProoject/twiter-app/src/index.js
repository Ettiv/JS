import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/'; //по умолчанию ищет index.js
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
