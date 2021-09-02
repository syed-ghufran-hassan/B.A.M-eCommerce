import {
    CART_ADD_OR_SUBTRACT_PRODUCT,
    CART_REMOVE_PRODUCT,
    CART_CLEAR,
} from "../actions/CartAction";

const initialState = {
    data: [],
};

function updateLocalStorage(data) {
    localStorage.setItem("store.cart.data", JSON.stringify(data));
}

function CartReducer(state = initialState, action) {
    // function to check if the product is already exist in the state.data
    const productExist = (data, product) => {
        return data.find((cartItem) => cartItem.product._id === product._id);
    };

    switch (action.type) {
        case CART_ADD_OR_SUBTRACT_PRODUCT:
            // modify product quantity if exist
            if (productExist(state.data, action.payload.product)) {

                // calculate cart
                const newData = state.data.map((cartItem) => {
                    // find product from state.data with matching id
                    if (cartItem.product._id === action.payload.product._id) {
                        cartItem.quantity += action.payload.quantity;

                        // quantity in cart cant be lower than 0
                        if (cartItem.quantity === 0) {
                            cartItem.quantity = 1;
                        }
                    }
                    return cartItem;
                });

                // storing into local storage
                updateLocalStorage(newData);

                return {
                    ...state,
                    data: newData,
                };
            } else {
                // else just concat the product into data array
                // this is necessary because redux state immutability
                // with redux RTK we could just push it

                // calculate new data
                const newData = state.data.concat(action.payload);

                // storing into local storage
                updateLocalStorage(newData);

                return {
                    ...state,
                    data: newData,
                };
            }

        case CART_REMOVE_PRODUCT:
            // remove product if exist
            if (productExist(state.data, action.payload.product)) {
                // calculate new cart data
                const newData = state.data.filter(
                    (cartItem) =>
                        cartItem.product._id !== action.payload.product._id,
                );

                // storing into local storage
                updateLocalStorage(newData);

                return {
                    ...state,
                    data: newData,
                };
            } else {
                // otherwise just do nothing
                return state;
            }

        case CART_CLEAR:
            return initialState;

        default:
            // restore from local storage
            const data = JSON.parse(localStorage.getItem("store.cart.data"));
            if (data) {
                return {
                    ...state,
                    data: data,
                    loading: false,
                    hasErrors: true,
                };
            }
            return state;
    }
}

export default CartReducer;
