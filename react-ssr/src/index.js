/* eslint-disable no-underscore-dangle */
import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store';
import App from './App';
import './index.css';

const state = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

const store = configureStore(state);

hydrate(
  <Provider store={store}>
    <BrowserRouter history={browserHistory}>{App()}</BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
