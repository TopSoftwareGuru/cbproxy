import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './components/store/reducers/rootReducer';
import { Provider } from 'react-redux';
import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import de from 'react-intl/locale-data/de';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';

import App from "./components/App";
import './assets/style/index.scss';
import fbConfig from './components/firebase/config';

addLocaleData(en);
addLocaleData(de);

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig),
  )
);

ReactDOM.render(
  <Provider
    store={store}
  >
    <App />
  </Provider>,
  document.getElementById("root"));
