export const createAccount = (accountInfo) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const {
      abc_account,
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
      transferout: [],
      transferin: [],
      activities: [],
    }).then(() => {
      dispatch({ type: 'ACCOUNT_CREATED', accountInfo });
    }).catch((err) => {
      dispatch({ type: 'ACCOUNT_CREATE_ERROR', err });
    })
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