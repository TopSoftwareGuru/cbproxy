const initState = {
  transOutInfo: "",
}

const transferReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log(action.transOutInfo);
      return Object.assign({}, state, { transOutInfo: action.transOutInfo });
    case 'CREATE_PROJECT_ERROR':
      console.log('error');
      return state;
    case 'ACTIVITY_UPDATED':
      console.log("Acitivity Updated");
      return state;
    case 'ACTIVITY_UPDATED_ERROR':
      console.log("Acitivity Updated ERROR");
      return state;
    default:
      return state;
  }
}

export default transferReducer;