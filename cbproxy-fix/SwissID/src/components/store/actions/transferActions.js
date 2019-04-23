export const transferOut = (transferInfo) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const {
      amount,
      add_info,
      transfer_funds,
      creditor_account,
      creditor_agent_bic,
      currency,
      debtor_account,
      endtoend_id,
      msg_id,
      msg_type,
      time_created,
    } = transferInfo;
    firestore.collection("TransferOut").add({
      amount,
      add_info,
      transfer_funds,
      creditor_account,
      creditor_agent_bic,
      currency,
      debtor_account,
      endtoend_id,
      msg_id,
      msg_type,
      time_created,
    }).then(() => {
      dispatch({ type: 'TRANSFER_OUT' });
    }).catch((err) => {
      dispatch({ type: 'TRANSFER_OUT_FAILURE', err });
    })
  }
};
export const transIn = (transferInInfo) => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    const firestore = getFirestore();
    const state = getState();
    console.log("state", state);

    const db = firestore.collection("users").doc(state.user.userInfo.email)
    db.get()
      .then(doc => {
        let { transin } = doc.data();
        
      })
  }
};
