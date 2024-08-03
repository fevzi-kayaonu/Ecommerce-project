import {
  REQUEST_ERROR,
  REQUEST_START,
  SET_LANGUAGE,
  SET_ROLES,
  SET_THEME,
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
    case SET_USER:
      return {
        ...state,
        loading: false,
        error: null,
        userInfo: { ...action.payload },
      };
    case SET_ROLES: // Action içinde yazdığımız methodda yazılan actıon.type başka reducer içinde de tanımlıysa fetch in hangisine gideceğini nerden biliyor.
      return { ...state, loading: false, error: null, roles: action.payload };
    case SET_THEME:
      return { ...state, loading: false, error: null, theme: action.payload };
    case SET_LANGUAGE:
      return {
        ...state,
        loading: false,
        error: null,
        language: action.payload,
      };

    default:
      return state;
  }
};

export default clientReducer;
