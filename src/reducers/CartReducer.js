import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  ADJUST_QTY,
  LOAD_CURRENT_ITEM
} from "../actions/CartAction";

const initialState = {
  data: []
};

function CartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      const productExist = state.data.find(cartItem => cartItem.product.id === action.payload.product.id);

      if (productExist) {
        return {
          ...state, data: state.data.map(cartItem => {
            if (cartItem.product.id === action.payload.product.id) {
              cartItem.quantity += action.payload.quantity;
              cartItem.product.price += cartItem.product.price;
            }
            return cartItem;
          })
        }
      } else {
        return {
          ...state, data: state.data.concat(action.payload)
        }
      }
    case REMOVE_PRODUCT:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload.id)
      };
    case ADJUST_QTY:
      return {
        ...state,
        cart: state.cart.map(item => item.id === action.payload.id ? { ...item, qty: action.payload.qty } : item)
      };
    case LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
}

export default CartReducer;