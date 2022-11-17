import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Layout from './styles/Globals';
import { LicProvider } from './context/index';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <LicProvider>
        <Layout>
          <App />
        </Layout>
      </LicProvider>
    </BrowserRouter>
  </React.StrictMode>
);
