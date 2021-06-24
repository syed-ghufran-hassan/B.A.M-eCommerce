import axios from "axios";

import { baseUrl } from "../env";

// action
export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
export const GET_PRODUCTS_FAILURE = "GET_PRODUCTS_FAILURE";

// action creator
export const getProducts = () => ({
  type: GET_PRODUCTS,
});

export const getProductsSuccess = (PRODUCTS) => ({
  type: GET_PRODUCTS_SUCCESS,
  payload: PRODUCTS,
});

export const getProductsFailure = () => ({
  type: GET_PRODUCTS_FAILURE,
});

// asynchronous thunk, combining action as one business logic
export const fetchProducts = () => async (dispatch) => {
  dispatch(getProducts());

  try {
    const response = await axios.get(baseUrl + "/products");
    dispatch(getProductsSuccess(response.data));
  } catch (err) {
    console.log(err);
    dispatch(getProductsFailure());
  }
};