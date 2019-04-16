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
      time_created
    } = accountInfo;
    firestore.collection('XYZ_account').add({
      alias,
      bic,
      currency,
      funding_account,
      iban_funding_account,
      iban,
      product_cost,
      time_created,
    }).then(() => {
      dispatch({ type: 'ACCOUNT_CREATED',accountInfo });
    }).catch((err) => {
      dispatch({ type: 'ACCOUNT_CREATE_ERROR', err });
    })
  }
}