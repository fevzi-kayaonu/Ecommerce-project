import { METHODS, sendRequest } from "../../util/axiosUtil";

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

export const postOrder = (cart, payment, orderAddress, price) => (dispatch) => {
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
  console.log(sendData);
  dispatch(requestStart());
  sendRequest({
    url: "/order",
    method: METHODS.POST,
    data: sendData,
    authentication: true,
    callbackSuccess: (data) => {
      console.log(data);
    },
    callbackError: (error) => {
      dispatch(requestError(error.message));
    },
  });
};
