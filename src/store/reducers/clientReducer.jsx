import {
  REQUEST_ERROR_CLİENT,
  REQUEST_START_CLİENT,
  SET_USER,
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
  roles: [],
  theme: "light",
  language: "tr",
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
    default:
      return state;
  }
};

export default clientReducer;
