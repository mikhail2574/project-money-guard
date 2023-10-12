import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'ui/components/App';
import GlobalStyles from 'ui/styles/GlobalStyles';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/project-money-guard">
      <GlobalStyles />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
