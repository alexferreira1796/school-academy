import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ThemeGlobalProvider } from './hooks/theme';
import { AuthProvider } from './hooks/AuthContext';
import { UpdateProvider } from './hooks/UpdateContext';

ReactDOM.render(
  <React.StrictMode>
    <ThemeGlobalProvider>
      <AuthProvider>
        <ToastContainer autoClose={2000} />
        <UpdateProvider>
          <App />
        </UpdateProvider>
      </AuthProvider>
    </ThemeGlobalProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
