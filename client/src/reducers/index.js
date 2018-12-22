import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import orderReducer from "./orderReducer";
import saleReducer from "./saleReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  order: orderReducer,
  sale: saleReducer
});
