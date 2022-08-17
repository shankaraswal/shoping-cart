import React from "react";
import axios from "axios";

// axios.defaults.headers.common = {
//   "Ocp-Apim-Subscription-Key": `${
//     process.env[`REACT_APP_APIM_KEY_${window.location.hostname}`]
//   }`,
// };
// let BASE_URL;
// if (localStorage.getItem("userType") === "TMCA Use") {
//   BASE_URL = `${
//     process.env[`REACT_APP_HN_BASE_URL_${window.location.hostname}`]
//   }`;
// } else if (localStorage.getItem("userType") === "Dealer Use") {
//   BASE_URL = `${
//     process.env[`REACT_APP_HN_BASE_URL_Dealer_${window.location.hostname}`]
//   }`;
// }

export const fetchProductsListing = (): any =>
  axios.get(`https://dummyjson.com/products`);

export const fetchProductDetail = (pid: string) =>
  axios.get(`https://dummyjson.com/products/${pid}`);

export const fetchCartDetail = (cid = 3): any =>
  axios.get(`https://dummyjson.com/carts/${cid}`);
