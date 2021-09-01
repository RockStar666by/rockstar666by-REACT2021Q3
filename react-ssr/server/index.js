import express from 'express';
import cors from 'cors';
import React from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { BrowserRouter } from 'react-router-dom';
import { browserHistory } from 'react-router';
import createStore from '../src/store';
import serverRenderer from './render';
import App from '../src/App';
import '../src/index.css';

const app = express();

app.use(cors());

app.use(express.static('dist'));

app.get('*', (req, res) => {
  const store = createStore();

  const content = renderToString(
    <Provider store={store}>
      <BrowserRouter history={browserHistory}>{App()}</BrowserRouter>
    </Provider>,
  );
  return res.send(serverRenderer({ store, content }));
});

app.listen(3000, () => {
  console.log(`Server is listening on port: 3000`);
});
