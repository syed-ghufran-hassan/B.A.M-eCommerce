import axios from "axios";

import { baseUrl } from "../env";

// We have two actions
export const AUTHENTICATION_IN_PROGRESS = "AUTHENTICATION_IN_PROGRESS";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_ERROR = "LOGIN_USER_ERROR";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_ERROR = "REGISTER_USER_ERROR";

export const UPDATE_IN_PROGRESS = "UPDATE_IN_PROGRESS";
export const UPDATE_SUCCESS = "UPDATE_SUCCESS";
export const UPDATE_ERROR = "UPDATE_ERROR";

export const DELETE_IN_PROGRESS = "DELETE_IN_PROGRESS";
export const DELETE_SUCCESS = "DELETE_SUCCESS";
export const DELETE_ERROR = "DELETE_ERROR";

// we have an action creator to get all the products from API
export const loginUser = (user) => async (dispatch) => {
    try {
        dispatch({ type: AUTHENTICATION_IN_PROGRESS });
        const { data } = await axios.post(baseUrl + "/users/login", user);
        dispatch({ type: LOGIN_USER_SUCCESS, payload: data });
    } catch (error) {
        console.log(error.message);
        dispatch({ type: REGISTER_USER_ERROR });
    }
};

export const registerUser = (user) => async (dispatch) => {
    try {
        dispatch({ type: AUTHENTICATION_IN_PROGRESS });
        const { data } = await axios.post(baseUrl + "/users/register", user);
        dispatch({ type: REGISTER_USER_SUCCESS, payload: data });
    } catch (error) {
        console.log(error.message);
        dispatch({ type: LOGIN_USER_ERROR });
    }
};

export const updateUser = (user) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_IN_PROGRESS });
        const { data } = await axios.put(`${baseUrl}/users/${user._id}`, user);
        dispatch({ type: UPDATE_SUCCESS, payload: data });
    } catch (error) {
        console.log(error.message);
        dispatch({ type: UPDATE_ERROR });
    }
};

export const deleteUser = (user) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_IN_PROGRESS });
        await axios.delete(`${baseUrl}/users/${user._id}`);
        dispatch({ type: DELETE_SUCCESS, payload: {} });
    } catch (error) {
        console.log(error.message);
        dispatch({ type: DELETE_ERROR });
    }
};
