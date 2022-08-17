import { call, put, fork, join, select } from "redux-saga/effects";
import { fetchProductsListing, fetchProductDetail } from "../apis";

import { setProductsListingToStore } from "../actions/ProductsListingsAction";
import { setProductDetailToStore } from "../actions/ProductDetailAction";
export function* handleFetchProductsListing(action) {
  try {
    const result = yield call(fetchProductsListing);

    if (result.status == 200) {
      yield put(setProductsListingToStore(result));
    }
  } catch (error) {
    console.log(error.message);
  }
}

export function* handleFetchProductDetail(action) {
  console.log("asdfasd", action);
  try {
    const result = yield call(fetchProductDetail, action.pid);

    if (result.status == 200) {
      console.log(result);
      yield put(setProductDetailToStore(result));
    }
  } catch (error) {
    console.log(error.message);
  }
}
