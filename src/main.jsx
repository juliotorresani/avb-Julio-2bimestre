import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';  // Importação do CSS global
import './App.css';    // Importação do CSS específico do App

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
