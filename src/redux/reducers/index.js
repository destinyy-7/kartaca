import { combineReducers } from "redux";

import ProductReducer from "../reducers/ProductReducer";
import UsersReducer from "./UsersReducer";
import AuthReducer from "../reducers/AuthReducer";

export default combineReducers({
  products: ProductReducer,
  users:UsersReducer,
  oneproduct:ProductReducer,
  user:AuthReducer,
});
