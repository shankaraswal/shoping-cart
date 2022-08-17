import { takeLatest, all } from "redux-saga/effects";
import { FETCH_PRODUCTS_LIST, FETCH_PRODUCT_DETAIL } from "../constants";
import {
  handleFetchProductsListing,
  handleFetchProductDetail,
} from "./ProductListingSaga";

function* watchAll() {
  yield all([
    takeLatest(FETCH_PRODUCTS_LIST, handleFetchProductsListing),
    takeLatest(FETCH_PRODUCT_DETAIL, handleFetchProductDetail),
  ]);
}

export default watchAll;
