import React from "react";
import ReactDOM from "react-dom";
// import { createStore, applyMiddleware } from 'redux';
// import rootReducer from './components/store/reducers/rootReducer';
// import { Provider } from 'react-redux';

import App from "./components/App";
import './index.scss';

// const store = createStore(
//   rootReducer,
//   compose(
//     applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
//     reduxFirestore(fbConfig),
//     reactReduxFirebase(fbConfig),
//   )
// );

ReactDOM.render(
    <App />,
  document.getElementById("root")
);