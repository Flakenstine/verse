import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import * as serviceWorker from './serviceWorker';
import './styles/global.scss';
import { App } from './containers';
import { Provider } from 'react-redux';
import reducer from './reducers';
import thunkMiddleware from 'redux-thunk';

const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware
  )
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
