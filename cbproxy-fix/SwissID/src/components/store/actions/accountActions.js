export const createAccount = (accountInfo) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const state = getState();

    const d = new Date();
    const utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    const nd = new Date(utc + (3600000 * '+2'));
    const eventTime = nd.toLocaleString();

    const {
      abc_account,
      account_status,
      bic,
      currency,
      funding_account,
      iban_funding_account,
      iban,
      product_cost,
      email,
      name,
      time_created,
    } = accountInfo;

    firestore.collection('users').doc(email).set({
      abc_account,
      activities:[],
      account_status,
      bic,
      currency,
      funding_account,
      iban_funding_account,
      iban,
      product_cost,
      email,
      name,
      balance: 0,
      trans_amount_out: 0,
      trans_amount_in: 0,
      time_created,
    }).then(() => {
      const db = firestore.collection("users").doc(state.user.userInfo.email)
      db.get()
        .then(doc => {
          let { activities, balance } = doc.data();
          activities.push({ event: "ACCOUNT", time: eventTime });
          db.update({ activities, balance });
        });
      dispatch({ type: 'ACCOUNT_CREATED', accountInfo });
    }).catch((err) => {
      dispatch({ type: 'ACCOUNT_CREATE_ERROR', err });
    })
  }
}
export const deactivateAccount = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const state = getState();
    const db = firestore.collection("users").doc(state.user.userInfo.email)
    db.update({ account_status: "inactive" })
      .then(() => {
        dispatch({ type: 'ACCOUNT_INACTIVE' });
      })
      .catch(err => {
        dispatch({ type: 'ACCOUNT_INACTIVE_FAILED', err });
      });
  }
}
export const saveVerifyInfo = (verifyInfo) => {
  return (dispatch => {
    dispatch({ type: 'SET_USER_MESSAGEID', payload: verifyInfo });
  })
}
export const VerifiedInfo = (verifiedInfo) => {
  return (dispatch => {
    dispatch({ type: 'SAVE_VERIFIED_STATE', payload: verifiedInfo });
  });
}
export const setAccountStatusActive = (status) => {
  return dispatch => {
    dispatch({ type: 'SET_USER_ACCOUNT_ACTIVE', payload: status });
  }
}