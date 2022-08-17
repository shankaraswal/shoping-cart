import { FETCH_PRODUCTS_LIST, SET_PRODUCTS_LIST } from "../constants";
export const fetchProductsListing = () => {
  console.log("action");
  return {
    type: FETCH_PRODUCTS_LIST,
  };
};

export const setProductsListingToStore = (payload) => ({
  type: SET_PRODUCTS_LIST,
  payload,
});
