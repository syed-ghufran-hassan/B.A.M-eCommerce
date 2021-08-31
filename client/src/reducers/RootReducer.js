import { combineReducers } from "redux";
import products from "./ProductReducer";
import cart from './CartReducer';
import usersReducer from "./UsersReducer";

export default combineReducers({
  products,
  cart,
  usersReducer
});
