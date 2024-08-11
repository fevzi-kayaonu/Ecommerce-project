import {
  ADD_TO_CART,
  DECREMENT_TO_CART,
  REMOVE_TO_CART,
  REQUEST_ERROR_SHOP,
  REQUEST_START_SHOP,
  SET_ORDER_ADDRESS,
  SET_CART,
  SET_PAYMENT,
} from "../actions/shoppingCartAction";

const order = {
  cart: [],
  payment: {},
  orderAddress: {},
  loading: true,
  error: null,
};

const shoppingCartReducer = (state = { ...order }, action) => {
  switch (action.type) {
    case REQUEST_START_SHOP:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case REQUEST_ERROR_SHOP:
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
        cart: [...action.payload],
      };
    case ADD_TO_CART: {
      const productIndex = state.cart.findIndex(
        (product) => product.id === action.payload.id
      );

      const newCart =
        productIndex === -1
          ? [...state.cart, { ...action.payload, sell_count: 1 }]
          : state.cart.map((product, index) =>
              index === productIndex
                ? { ...product, sell_count: product.sell_count + 1 }
                : product
            );

      return {
        ...state,
        loading: false,
        error: null,
        cart: newCart,
      };
    }
    case DECREMENT_TO_CART: {
      return {
        ...state,
        loading: false,
        error: null,
        cart: state.cart.filter((product) => {
          if (product.id === action.payload) {
            product.sell_count -= 1;
            return product.sell_count > 0;
          }
          return true;
        }),
      };
    }

    case REMOVE_TO_CART:
      return {
        ...state,
        loading: false,
        error: null,
        cart: [
          ...state.cart.filter((product) => product.id !== action.payload),
        ],
      };
    case SET_PAYMENT:
      return {
        ...state,
        loading: false,
        error: null,
        payment: { ...action.payload },
      };
    case SET_ORDER_ADDRESS:
      return {
        ...state,
        loading: false,
        error: null,
        orderAddress: { ...action.payload },
      };
    default:
      return state;
  }
};

export default shoppingCartReducer;
