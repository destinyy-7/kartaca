import axios from "axios";
export const UsersAction = () => {
  return (dispatch) => {
    axios
      .get(`/users`)
      .then((resp) => dispatch({ type: "GET_USERS", payload: resp.data }));
  };
};