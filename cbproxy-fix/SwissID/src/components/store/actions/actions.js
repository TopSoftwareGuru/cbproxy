export const transOut = (transOutInfo) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore.collection('TransferOut').add({
      amount: transOutInfo.amount,
      time_created: new Date(),
      msg_type: "pain.001.001",
      msg_id: "",
      endtoend_id: "",
      currency: "CHF",
      debtor_account: transOutInfo.xyz_acc,
      debtor_agenct_bic: "Bank xyz",
      creditor_account: transOutInfo.abc_acc,
      creditor_agent_bic: "Bank abc",
      additional_info: transOutInfo.add_info,
    }).then(() => {
      dispatch({ type: 'CREATE_PROJECT',transOutInfo });
    }).catch((err) => {
      dispatch({ type: 'CREATE_PROJECT_ERROR', err });
    })
  }
};

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
