export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const ADJUST_QTY = "ADJUST_QTY";
export const LOAD_CURRENT_ITEM = "LOAD_CURRENT_ITEM";

export const addToCart = (product, quantity) => {
  return {
    type: ADD_PRODUCT,
    payload: {
      product: product,
      quantity: quantity
    }
  }
}

export const removeFromCart = (itemID) => {
  return {
    type: REMOVE_PRODUCT,
    payload: {
      id: itemID,
    }
  }
}

export const adjustQty = (itemID, value) => {
  return {
    type: ADJUST_QTY,
    payload: {
      id: itemID,
      qty: value
    }
  }
}

export const loadCurrentItem = (item) => {
  return {
    type: LOAD_CURRENT_ITEM,
    payload: item
  }
}