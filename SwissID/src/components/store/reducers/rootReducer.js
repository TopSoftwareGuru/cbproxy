import { combineReducers } from 'redux';
import transferReducer from './transferReducer';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  transfer: transferReducer,
  firestore: firestoreReducer
});

export default rootReducer;