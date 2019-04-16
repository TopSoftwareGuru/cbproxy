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
      console.log("TRANSFER_OUT created");
      dispatch({ type: 'TRANSFER_OUT' });
    }).catch((err) => {
      dispatch({ type: 'TRANSFER_OUT_FAILURE', err });
    })
  }
};
