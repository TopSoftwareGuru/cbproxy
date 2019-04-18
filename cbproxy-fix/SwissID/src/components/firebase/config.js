import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
  apiKey: "AIzaSyDkgHhrfukM66UJhwLsV-TMPFc4Sxp6b1U",
  authDomain: "swissid-c228f.firebaseapp.com",
  databaseURL: "https://swissid-c228f.firebaseio.com",
  projectId: "swissid-c228f",
  storageBucket: "swissid-c228f.appspot.com",
  messagingSenderId: "401581061782"
};

firebase.initializeApp(config);

export default firebase;