import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'ui/components/App';
import GlobalStyles from 'ui/styles/GlobalStyles';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from 'redux/store';
import { ContextProvider } from 'context/ContextProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter basename="/project-money-guard">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
        <ContextProvider>
          <App />
        </ContextProvider>
        <GlobalStyles />
      </Provider>
    </BrowserRouter>
  </>
);
