import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux';
import AppContainer from './containers/app.container';
import * as serviceWorker from './serviceWorker';
import './styles/global.scss';

// const store = createStore();

ReactDOM.render(
  <BrowserRouter>
    <AppContainer />
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
