
const initialState = {
  userInfo: {
    email: "",
    name: "",
  },
}
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_CREATED':
      console.log('usercreated');
      return state;
    case 'USER_CREATED_ERROR':
      console.log('error');
      return state;
    case 'SET_USER_ACCOUNT':
      return Object.assign({}, state, { userInfo: action.payload });
    case 'ACCOUNT_CREATED':
      return state;
    case 'ACCOUNT_CREATED_ERROR':
      return state;
    case 'SET_VERIFY_INFO':
      console.log("set verify info", action.payload);
      return state;
    case 'SET_USER_ACCOUNT_INFO':
      return Object.assign({}, state, { accountInfo: action.payload });
    case 'SET_USER_MESSAGEID':
      return Object.assign({}, state, { messageId: action.payload.messageId });
    default:
      return state;
  }
}

export default userReducer;