import { combineReducers } from "redux";
import { productslist, productdetail } from "./all-reducers";

const rootReducer = combineReducers({
  productslist: productslist,
  productdetail: productdetail,
});

export default rootReducer;
