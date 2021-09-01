import axios from "axios";

import {
    LOGIN_USER_SUCCESS,
    LOGIN_USER_ERROR,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_ERROR,
    AUTHENTICATION_IN_PROGRESS,
    UPDATE_IN_PROGRESS,
    UPDATE_SUCCESS,
    UPDATE_ERROR,
    DELETE_IN_PROGRESS,
    DELETE_SUCCESS,
    DELETE_ERROR
} from "../actions/usersAction.js";

const initialState = {
    data: {},
    loading: false,
    hasErrors: false,
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTHENTICATION_IN_PROGRESS:
            return { ...state, loading: true, hasErrors: false };
        case LOGIN_USER_SUCCESS:
            // storing into local storage
            localStorage.setItem("store.usersReducer.data", JSON.stringify(action.payload));
            // setting token to axios header
            axios.defaults.headers.common = {'Authorization': `Bearer ${action.payload.token}`}
            return { data: action.payload, loading: false, hasErrors: false };
        case LOGIN_USER_ERROR:
            return { ...state, loading: false, hasErrors: true };
        case REGISTER_USER_SUCCESS:
             // storing into local storage
            localStorage.setItem("store.usersReducer.data", JSON.stringify(action.payload));
            // setting token to axios header
            axios.defaults.headers.common = {'Authorization': `Bearer ${action.payload.token}`}
            return { data: action.payload, loading: false, hasErrors: false };
        case REGISTER_USER_ERROR:
            return { ...state, loading: false, hasErrors: true };
        case UPDATE_IN_PROGRESS :
            return { ...state, loading: true, hasErrors: false };
        case UPDATE_SUCCESS :
            // retrieve current usersReducer.data from local storage
            const savedData = JSON.parse(localStorage.getItem("store.usersReducer.data"));
            savedData.user = action.payload;
            // storing into local storage
            localStorage.setItem("store.usersReducer.data",JSON.stringify(savedData));
            return { data: savedData, loading: false, hasErrors: false };
        case UPDATE_ERROR :   
            return { ...state, loading: false, hasErrors: true };
        case DELETE_IN_PROGRESS :
            return { ...state, loading: true, hasErrors: false };
        case DELETE_SUCCESS:
            // remove from storage
            localStorage.removeItem("store.usersReducer.data");
            // reset userReducer
            return initialState;
        case DELETE_ERROR:
            return { ...state, loading: false, hasErrors: true };
        default:
            // restore from local storage
            const data = JSON.parse(localStorage.getItem("store.usersReducer.data"));
            if(data){
                // setting token to axios header
                axios.defaults.headers.common = {'Authorization': `Bearer ${data.token}`}
                return { ...state, data: data, loading: false, hasErrors: true };
            }
            return state;
    }
};

export default usersReducer;
