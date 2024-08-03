import { REQUEST_ERROR, REQUEST_START } from "../actions/clientAction";
import {
  SET_ADDRESS,
  SET_CART,
  SET_PAYMENT,
} from "../actions/shoppingCartAction";

const order = {
  cart: [],
  payment: {},
  address: {},
  loading: true,
  error: null,
};

const shoppingCartReducer = (state = { ...order }, action) => {
  switch (action.type) {
    case REQUEST_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case SET_CART:
      return {
        ...state,
        loading: false,
        error: null,
        cart: [...state.cart, action.payload],
      };
    case SET_PAYMENT:
      return {
        ...state,
        loading: false,
        error: null,
        payment: [...state.payment, action.payload],
      };
    case SET_ADDRESS:
      return {
        ...state,
        loading: false,
        error: null,
        address: [...state.address, action.payload],
      };
    default:
      return state;
  }
};

export default shoppingCartReducer;
