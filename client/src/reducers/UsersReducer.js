import {
    LOGIN_USER_SUCCESS,
    LOGIN_USER_ERROR,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_ERROR,
    AUTHENTICATION_START,
} from "../actions/usersAction.js";

const initialState = {
    data: {},
    loading: false,
    hasErrors: false,
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTHENTICATION_START:
            return { ...state, loading: true, hasErrors: false };
        case LOGIN_USER_SUCCESS:
            // storing into local storage
            localStorage.setItem("store.usersReducer.data", JSON.stringify(action.payload));
            return { data: action.payload, loading: false, hasErrors: false };
        case LOGIN_USER_ERROR:
            return { ...state, loading: false, hasErrors: true };
        case REGISTER_USER_SUCCESS:
             // storing into local storage
            localStorage.setItem("store.usersReducer.data", JSON.stringify(action.payload));
            return { data: action.payload, loading: false, hasErrors: false };
        case REGISTER_USER_ERROR:
            return { ...state, loading: false, hasErrors: true };
        default:
            // restore from local storage
            const data = JSON.parse(localStorage.getItem("store.usersReducer.data"));
            if(data){
                return { ...state, data: data, loading: false, hasErrors: true };
            }
            return state;
    }
};

export default usersReducer;
