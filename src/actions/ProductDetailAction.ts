import { FETCH_PRODUCT_DETAIL, SET_PRODUCT_DETAIL } from "../constants";

export const fetchProductDetail = (pid: string) => {
  console.log("action");
  return {
    type: FETCH_PRODUCT_DETAIL,
    pid,
  };
};

export const setProductDetailToStore = (payload: any) => ({
  type: SET_PRODUCT_DETAIL,
  payload,
});
