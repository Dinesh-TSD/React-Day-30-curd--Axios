import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './assets/sb-admin-2.min.css'
import 'react-toastify/dist/ReactToastify.css'
import'./assets/frame-work.min.css'
import { Provider } from 'react-redux';
import { store } from './Store';
import "bootstrap"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>

);


