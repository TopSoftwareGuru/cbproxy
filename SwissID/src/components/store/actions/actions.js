export const transOut = (transOutInfo) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore.collection('TransferOut').add({
      // abc_acc: transOutInfo.abc_acc,
      // additional_info: transOutInfo.additional_info,
      
      // xyz_acc: transOutInfo.xyz_acc,
      amount: transOutInfo.amount,
      time_created: new Date(),
      msg_type: "pain.001.001",
      msg_id: "",
      endtoend_id: "",
      currency: "CHF",
      debtor_account: transOutInfo.xyz_acc,
      debtor_agenct_bic: "Bank xyz",
      creditor_account: transOutInfo.abc_acc,
      creditor_agent_bic: "Bank abc"
    }).then(() => {
      dispatch({ type: 'CREATE_PROJECT',transOutInfo });
    }).catch((err) => {
      dispatch({ type: 'CREATE_PROJECT_ERROR', err });
    })
  }
};
