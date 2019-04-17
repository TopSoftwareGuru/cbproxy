
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
    default:
      return state;
  }
}

export default userReducer;