import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Layout from './styles/Globals';
import { LicProvider } from './context/index';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <LicProvider>
      <Layout>
        <App />
      </Layout>
    </LicProvider>
  </React.StrictMode>
);
