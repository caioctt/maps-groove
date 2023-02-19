import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles/global.css';

import App from './App';
import MuiThemeProvider from './styles/components/MuiThemeProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MuiThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MuiThemeProvider>
  </React.StrictMode>
);
