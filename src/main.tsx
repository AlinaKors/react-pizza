import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { store } from './store/store.js';
import './index.scss';
import App from './containers/App';
import { BrowserRouter } from 'react-router';
import React from 'react';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
);
