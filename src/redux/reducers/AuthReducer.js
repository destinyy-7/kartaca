const AuthReducer = (state = [], action) => {
  switch (action.type) {
    case "SIGNUP_USER":
      return { ...state, user: action.payload };
    case "SIGNIN_USER":
      return { ...state, user: action.payload };
      case "PUT_LOGOUT":
        return { ...state, user: action.payload };
    default:
      return state;
  }
};
export default AuthReducer;
