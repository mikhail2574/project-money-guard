import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'ui/components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/project-money-guard">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
