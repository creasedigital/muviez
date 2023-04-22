import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import 'toasted-notes/src/styles.css'; // optional styles

import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './registerServiceWorker';
import store from './store';
import AppThemeProvider from './store/ThemeContext';
import Notifier from './Notifier';

ReactDOM.render(
  <Provider store={store}>
    <AppThemeProvider>
      <React.StrictMode>
        <App />
        <Notifier />
      </React.StrictMode>
    </AppThemeProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
serviceWorker.register();
