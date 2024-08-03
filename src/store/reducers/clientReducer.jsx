import {
  REQUEST_ERROR,
  REQUEST_START,
  REQUEST_SUCCESS,
  SET_LANGUAGE,
  SET_ROLES,
  SET_THEME,
  SET_USER,
} from "../actions/clientAction";

export const client = {
  userInfo: {
    name: "",
    email: "",
    token: localStorage.getItem("token"),
    role_id: "",
  },
  addressList: [],
  creditCards: [],
  roles: [],
  theme: "light",
  language: "tr",
  loading: false,
  error: null,
};

const clientReducer = (state = client, action) => {
  switch (action.type) {
    case REQUEST_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case SET_USER:
      return { ...state, userInfo: { ...action.payload } };
    case SET_ROLES: // Action içinde yazdığımız methodda yazılan actıon.type başka reducer içinde de tanımlıysa fetch in hangisine gideceğini nerden biliyor.
      return { ...state, roles: action.payload };
    case SET_THEME:
      return { ...state, theme: action.payload };
    case SET_LANGUAGE:
      return { ...state, language: action.payload };

    default:
      return state;
  }
};

export default clientReducer;
