import * as categoryTypes from "../types/Category";

const initialState = {
  products: [],
  cart: [],
  currentItem: null
};

function CartReducer(state = initialState, action) {
  switch (action.type) {
    case categoryTypes.ADD_PRODUCT:
      return {};
    case categoryTypes.REMOVE_PRODUCTS:
      return {};
    case categoryTypes.ADJUST_QTY:
      return {};
    case categoryTypes.LOAD_CURRENT_ITEM:
      return {};
    default:
      return state;
  }
}

export default CartReducer;