export const SET_CART = "SET_CART";
export const ADD_TO_CART = "ADD_TO_CART";
export const DECREMENT_TO_CART = "DECREMENT_TO_CART";
export const REMOVE_TO_CART = "REMOVE_TO_CART";
export const SET_PAYMENT = "SET_PAYMENT";
export const SET_ORDER_ADDRESS = "SET_ORDER_ADDRESS";

export const REQUEST_START_SHOP = "REQUEST_START_SHOP";
export const REQUEST_SUCCESS_SHOP = "REQUEST_SUCCESS_SHOP";
export const REQUEST_ERROR_SHOP = "REQUEST_ERROR_SHOP";

export const requestStart = () => ({ type: REQUEST_START_SHOP });
export const requestSuccess = () => ({ type: REQUEST_SUCCESS_SHOP });
export const requestError = (error) => ({ type: REQUEST_ERROR_SHOP, error });

export const setCart = (data) => {
  return { type: SET_CART, payload: data };
};

export const setPayment = (data) => {
  return { type: SET_PAYMENT, payload: data };
};

export const setOrderAddress = (data) => {
  return { type: SET_ORDER_ADDRESS, payload: data };
};
export const addToCart = (data) => {
  return { type: ADD_TO_CART, payload: data };
};
export const removeToCart = (data) => {
  return { type: REMOVE_TO_CART, payload: data };
};
export const decrementToCart = (data) => {
  return { type: DECREMENT_TO_CART, payload: data };
};
