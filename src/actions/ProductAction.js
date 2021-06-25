import axios from "axios";

import { baseUrl } from "../env";
import * as categoryTypes from "../types/Category";

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
export const fetchProducts = (category) => async (dispatch) => {
  dispatch(getProducts());

  try {
    const response = await axios.get(baseUrl + "/products");
    const unfilteredData = response.data;

    let filteredData = [];

    if (category) {
      filteredData = unfilteredData.filter((p) => p.category === category);
    } else {
      filteredData = unfilteredData.filter(
        (p) =>
          p.category === categoryTypes.WOMENS_CLOTHING ||
          p.category === categoryTypes.MENS_CLOTHING
      );
    }

    dispatch(getProductsSuccess(filteredData));
  } catch (err) {
    console.log(err);
    dispatch(getProductsFailure());
  }
};
