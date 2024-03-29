import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Layout from './styles/Globals';
import { LicProvider } from './context/index';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <LicProvider>
          <Layout>
            <App />
          </Layout>
        </LicProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
