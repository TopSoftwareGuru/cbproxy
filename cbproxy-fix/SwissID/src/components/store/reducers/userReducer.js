
const account = {
  accessToken: null,
  abc_account: null,
  account_status: null,
  bic: null,
  currency: null,
  funding_account: null,
  iban_funding_account: null,
  iban: null,
  product_cost: null,
  name: null,
  email: null,
  balance: null,
  time_created: null
};

const userReducer = (state = account, action) => {
  switch (action.type) {
    case "UPDATE_BALANCE":
      return Object.assign({}, state, { balance: action.payload });
    case 'SET_USER_ACCOUNT':
      const { email, name } = action.payload;
      return Object.assign({}, state, { email, name });
    case 'ACCOUNT_INACTIVE':
      return Object.assign({}, state, { account_status: "inactive" });
    case 'SET_VERIFY_INFO':
      return state;
    case 'SET_USER_ACCOUNT_INFO':
      const { accessToken } = action.payload;
      localStorage.setItem("accessToken", accessToken);
      return Object.assign({}, state, action.payload);
    case 'SET_USER_MESSAGEID':
      return Object.assign({}, state, { messageId: action.payload.messageId });
    case 'USER_LOGOUT':
      return Object.assign({}, state, { email: null,  name: null });
    case 'USER_LOGOUT_ERROR':
      return state;
    case 'SET_USER_ACCOUNT_ACTIVE':
      return Object.assign({}, state, { status: action.payload });
    default:
      return state;
  }
}

export default userReducer;