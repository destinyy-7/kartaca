import axios from "axios";

export const SignUpApi = (body) => {
  return (dispatch) => {
    axios
      .post("/users/createuser", body)
      .then((resp) => dispatch({ type: "SIGNUP_USER", payload: resp.data }));
  };
};

export const LoginApi = (body) => {
  return (dispatch) => {
    axios
      .post("/users/login", body)
      .then((resp) => dispatch({ type: "SIGNIN_USER", payload: resp.data }));
  };
};
export const Logout = (id) => {
  return (dispatch) => {
    axios
      .put(`/users/logout/${id}`)
      .then((resp) => dispatch({ type: "PUT_LOGOUT", payload: resp.data }));
  };
};

