import {
  ADD_ADDRESS,
  ADD_CREDIT_CARD,
  REMOVE_ADDRESS,
  REMOVE_CREDIT_CARD,
  REQUEST_ERROR_CLİENT,
  REQUEST_START_CLİENT,
  SET_CREDIT_CARD,
  SET_USER,
  SET_ADDRESS,
} from "../actions/clientAction";

export const client = {
  userInfo: {
    name: "",
    email: "",
    token: undefined,
    role_id: "",
  },
  addressList: [],
  creditCards: [],
  loading: true,
  error: null,
};

const clientReducer = (state = { ...client }, action) => {
  switch (action.type) {
    case REQUEST_START_CLİENT:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case REQUEST_ERROR_CLİENT:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case SET_USER:
      return {
        ...state,
        loading: false,
        error: null,
        userInfo: { ...action.payload },
      };
    case SET_ADDRESS:
      return {
        ...state,
        loading: false,
        error: null,
        addressList: [...action.payload],
      };
    case SET_CREDIT_CARD:
      return {
        ...state,
        loading: false,
        error: null,
        creditCards: [...action.payload],
      };
    case ADD_ADDRESS:
      return {
        ...state,
        loading: false,
        error: null,
        addressList: [...state.addressList, ...action.payload],
      };
    case ADD_CREDIT_CARD:
      return {
        ...state,
        loading: false,
        error: null,
        creditCards: [...state.creditCards, ...action.payload],
      };
    case REMOVE_ADDRESS:
      return {
        ...state,
        loading: false,
        error: null,
        addressList: [...action.payload],
      };
    case REMOVE_CREDIT_CARD:
      return {
        ...state,
        loading: false,
        error: null,
        creditCards: [...action.payload],
      };
    default:
      return state;
  }
};

export default clientReducer;
