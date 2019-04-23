export const createAccount = (accountInfo) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const {
      alias,
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
      alias,
      bic,
      currency,
      funding_account,
      iban_funding_account,
      iban,
      product_cost,
      email,
      name,
      balance: 0,
      transferout: 0,
      transferin: 0,
      time_created,
      transferout: [],
      transferin: [],
      activities: [],
    }).then(() => {
      dispatch({ type: 'ACCOUNT_CREATED',accountInfo });
    }).catch((err) => {
      console.log(err);
      dispatch({ type: 'ACCOUNT_CREATE_ERROR', err });
    })
  }
}

export const userAccount = (userInfo) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const {
      email,
      name,
    } = userInfo
    firestore.collection('users').add({
      balance: 0,
      transferout: 0,
      transferin: 0,
      email,
      name,
      created_time: new Date(),
    }).then(() => {
      dispatch({ type: 'USER_CREATED', userInfo });
    }).catch(err => {
      dispatch({ type: 'USER_CREATED_ERROR', err });
    })
  }
}

export const saveVerifyInfo = (verifyInfo) => {
  return (dispatch => {
    dispatch({ type: 'SET_USER_MESSAGEID', payload: verifyInfo });
  })
};

export const VerifiedInfo = (verifiedInfo) => {
  return (dispatch => {
    dispatch({ type: 'SAVE_VERIFIED_STATE', payload: verifiedInfo });
  });
}