export const transOut = (transferInfo) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const state = getState();
    const {
      amount,
      addinfo,
      event,
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

    const d = new Date();
    const utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    const nd = new Date(utc + (3600000 * '+2'));
    const eventTime = nd.toLocaleString();

    const db = firestore.collection("users").doc(state.user.userInfo.email)
    db.get()
      .then(doc => {
        let { activities, balance } = doc.data();
        if (event === "TI" ) {
          activities.push({ event: "TI", time: eventTime, amount, addinfo });
          balance += parseFloat(amount, 10.00);
        } else {
          activities.push({ event: "TO", time: eventTime, amount, addinfo });
          balance -= parseFloat(amount);
        }
        db.update({ activities, balance });
      });
  }
};
export const transIn = (transferInInfo) => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    const firestore = getFirestore();
    const state = getState();
    console.log("state", state);
    const {
      amount,
      addinfo,
      event,
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
    const db = firestore.collection("users").doc(state.user.userInfo.email)
    db.get()
    .then(doc => {
      let { activities } = doc.data();
      
      db.update({
        activities
      })
        .then(() => { dispatch() })
        .catch(err => { dispatch() })
    });
  }
};
