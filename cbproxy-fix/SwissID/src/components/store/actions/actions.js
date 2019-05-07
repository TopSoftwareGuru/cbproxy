import { actionTypes } from "redux-firestore";

const getRelativeTime = () => {
  const d = new Date();
  const utc = d.getTime() + (d.getTimezoneOffset() * 60000);
  const nd = new Date(utc + (3600000 * '+2'));
  
  return nd.toLocaleString();
}
export const activityLogon = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const state = getState();
    fetch("/api/login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({email: state.user.userInfo.email}),
    }).then(() => dispatch({ type: 'LOGON' }))
      .catch(err => dispatch({ type: 'LOGON_ERR', err }))
  }
};
export const getUserAccountInfo = (accountInfo) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const state = getState();
    const firestore = getFirestore();
    const { email } = accountInfo;
    const db = firestore.collection("users").doc(email);
    
    db.get()
      .then(doc => dispatch({ type: "GET_USER_ACCOUNT_INFO", doc }))
      .catch(err => dispatch({ type: "GET_USER_ACCOUNT_INFO_ERROR", err }))
  }
}
export const activityLogout = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const state = getState();
    const firestore = getFirestore();
    const eventTime = getRelativeTime();
    
    const db = firestore.collection('users').doc(state.user.userInfo.email);
    db.get()
      .then(doc => {
        let { activities } = doc.data();
        activities.push({ event: "LOGOUT", eventTime });
        db.update({ activities })
          .then(() => dispatch({ type: "USER_LOGOUT" }))
          .catch(() => dispatch({ type: "USER_LOGOUT_ERROR", err }))
      });
  }
}
export const setUserInfo = (userInfo) => {
  return dispatch => {
    dispatch({ type: 'SET_USER_ACCOUNT', payload: userInfo })
  };
}
export const setUserAccountInfo = (accountInfo) => {
  return dispatch => {
    dispatch({ type: 'SET_USER_ACCOUNT_INFO', payload: accountInfo });
  };
};