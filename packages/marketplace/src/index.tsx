import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as StoreProvider } from 'react-redux';

import App from './App';
import * as serviceWorker from './serviceWorker';
import { composeStore } from './store';

const store = composeStore();

ReactDOM.render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
