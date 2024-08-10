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
  UPDATE_ADDRESS,
  UPDATE_CREDIT_CARD,
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
  loading: { userInfo: true, local: true },
  error: null,
};

const clientReducer = (state = { ...client }, action) => {
  switch (action.type) {
    case REQUEST_START_CLİENT:
      return {
        ...state,
        loading: {
          ...state.loading,
          [action.payload]: true,
        },
        error: null,
      };
    case REQUEST_ERROR_CLİENT:
      return {
        ...state,
        loading: {
          ...state.loading,
          [action.payload.loadingKey]: false,
        },
        error: action.payload.error,
      };
    case SET_USER:
      return {
        ...state,
        loading: {
          ...state.loading,
          userInfo: false,
        },
        error: null,
        userInfo: { ...action.payload },
      };
    case SET_ADDRESS:
      return {
        ...state,
        loading: {
          ...state.loading,
          local: false,
        },
        error: null,
        addressList: [...action.payload],
      };
    case SET_CREDIT_CARD:
      return {
        ...state,
        loading: {
          ...state.loading,
          local: false,
        },
        error: null,
        creditCards: [...action.payload],
      };
    case ADD_ADDRESS:
      return {
        ...state,
        loading: {
          ...state.loading,
          local: false,
        },
        error: null,
        addressList: Array.isArray(action.payload)
          ? [...state.addressList, ...action.payload]
          : [...state.addressList, action.payload],
      };
    case ADD_CREDIT_CARD:
      return {
        ...state,
        loading: {
          ...state.loading,
          local: false,
        },
        error: null,
        creditCards: Array.isArray(action.payload)
          ? [...state.creditCards, ...action.payload]
          : [...state.creditCards, action.payload],
      };
    case UPDATE_ADDRESS:
      return {
        ...state,
        loading: {
          ...state.loading,
          local: false,
        },
        error: null,
        addressList: [
          ...state.addressList.filter(
            (address) => address.id !== action.payload.id
          ),
          action.payload,
        ],
      };
    case UPDATE_CREDIT_CARD:
      return {
        ...state,
        loading: {
          ...state.loading,
          local: false,
        },
        error: null,
        creditCards: [
          ...state.creditCards.filter(
            (creditCard) => creditCard.id !== action.payload.id
          ),
          action.payload,
        ],
      };

    case REMOVE_ADDRESS:
      return {
        ...state,
        loading: {
          ...state.loading,
          local: false,
        },
        error: null,
        addressList: [
          ...state.addressList.filter(
            (address) => address.id != action.payload
          ),
        ],
      };
    case REMOVE_CREDIT_CARD:
      return {
        ...state,
        loading: {
          ...state.loading,
          local: false,
        },
        error: null,
        creditCards: [
          ...state.creditCards.filter(
            (creditCard) => creditCard.id != action.payload
          ),
        ],
      };
    default:
      return state;
  }
};

export default clientReducer;