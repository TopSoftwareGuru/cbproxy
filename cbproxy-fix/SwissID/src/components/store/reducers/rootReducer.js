import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

import intlReducer from './intlReducer';
import transferReducer from './transferReducer';

const rootReducer = combineReducers({
  transfer: transferReducer,
  intl: intlReducer,
  firestore: firestoreReducer
});

export default rootReducer;