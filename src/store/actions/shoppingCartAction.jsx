import { METHODS, sendRequest } from "../../util/axiosUtil";
import { showToast } from "../../util/ShowToast";

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

export const postOrder =
  (cart, payment, orderAddress, price, history) => (dispatch) => {
    const sendData = {
      address_id: orderAddress.id,
      order_date: new Date().toISOString(),
      card_no: payment.card_no,
      card_name: payment.name_on_card,
      card_expire_month: payment.expire_month,
      card_expire_year: payment.expire_year,
      card_ccv: 213,
      price: price,
      products: cart.map((product) => {
        return {
          product_id: product.id,
          count: product.sell_count,
          detail: product.description,
        };
      }),
    };
    dispatch(requestStart());
    sendRequest(
      {
        url: "/order",
        method: METHODS.POST,
        data: sendData,
        authentication: true,
        redirect: "/previous-orders",
        callbackSuccess: (data) => {
          dispatch(setCart([]));
          showToast({
            message:
              "Congratulations! Your order has been successfully placed.",
            type: "success",
            position: "top-right",
            autoClose: 2000,
            closeOnClick: false,
            transition: "Zoom",
            limit: 1,
          });
        },
        callbackError: (error) => {
          dispatch(requestError(error.message));
          showToast({
            message: "Failed to place your order. Please try again later.",
            type: "error",
            position: "top-center",
            autoClose: 5000,
            closeOnClick: false,
            transition: "Bounce",
            limit: 1,
          });
        },
      },
      history
    );
  };
