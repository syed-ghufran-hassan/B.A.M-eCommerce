import * as categoryTypes from "../types/Category";

export const addToCart = (itemID) => {
  return {
    type: categoryTypes.ADD_PRODUCT,
    payload: {
      id: itemID,
    }
  }
}

export const removeFromCart = (itemID) => {
  return {
    type: categoryTypes.REMOVE_PRODUCTS,
    payload: {
      id: itemID,
    }
  }
}

export const adjustQty = (itemID, value) => {
  return {
    type: categoryTypes.ADJUST_QTY,
    payload: {
      id: itemID,
      qty: value
    }
  }
}

export const loadCurrentItem = (item) => {
  return {
    type: categoryTypes.LOAD_CURRENT_ITEM,
    payload: item
  }
}