import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'ui/components/App';
import GlobalStyles from 'ui/styles/GlobalStyles';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter basename="/project-money-guard">
      <Provider store={store}>
        <App />
        <GlobalStyles />
      </Provider>
    </BrowserRouter>
  </>
);
