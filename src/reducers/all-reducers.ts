import { SET_PRODUCTS_LIST, SET_PRODUCT_DETAIL } from "../constants";

const INITIAL_STATE = [];

const productslist = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_PRODUCTS_LIST: {
      const products = action.payload.data;
      console.log(products);
      return { ...state, ...products };
    }
    default:
      return state;
  }
};

const productdetail = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_PRODUCT_DETAIL: {
      const product = action.payload.data;
      console.log(product);
      return { ...state, ...product };
    }
    default:
      return state;
  }
};

export { productslist, productdetail };
