import React from "react";
import ReactDOM from "react-dom";
// import { createStore, applyMiddleware } from 'redux';
// import rootReducer from './components/store/reducers/rootReducer';
import { Provider } from 'react-redux';
import configureStore from './configureStore'
import { BrowserRouter as Router } from 'react-router-dom';

import App from "./components/App";
import './index.scss';

const initialState = {
  username: '',
  email: '',
  locale: 'en',
  loginFailed: 0,
  signupFailed: false,
  updateFailed: false,
  userData: [],
  offerData: [],
  viewData: null,
  token: '',
  offerId: null,
  userAdmin: '',
};

const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);