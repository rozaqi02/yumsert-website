import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Polyfill untuk process (jika diperlukan)
window.process = { env: { NODE_ENV: 'development' } };

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);