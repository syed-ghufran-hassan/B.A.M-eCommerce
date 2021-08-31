import axios from "axios";

import { baseUrl } from "../env";

// We have two actions
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_ERROR = "LOGIN_USER_ERROR";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_ERROR = "REGISTER_USER_ERROR";
export const AUTHENTICATION_START = "AUTHENTICATION_START";

// we have an action creator to get all the products from API
export const loginUser = (user) => async (dispatch) => {
    try {
        dispatch({ type: AUTHENTICATION_START });
        const { data } = await axios.post(baseUrl + "/users/login", user);
        dispatch({ type: LOGIN_USER_SUCCESS, payload: data });
    } catch (error) {
        console.log(error.message);
        dispatch({ type: REGISTER_USER_ERROR });
    }
};

export const registerUser = (user) => async (dispatch) => {
    try {
        dispatch({ type: AUTHENTICATION_START });
        const { data } = await axios.post(baseUrl + "/users/register", user);
        dispatch({ type: REGISTER_USER_SUCCESS, payload: data });
    } catch (error) {
        console.log(error.message);
        dispatch({ type: LOGIN_USER_ERROR });
    }
};
