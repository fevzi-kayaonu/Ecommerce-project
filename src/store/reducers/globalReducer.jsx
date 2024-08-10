import {
  REQUEST_ERROR_GLOBAL,
  REQUEST_START_GLOBAL,
  SET_LANGUAGE,
  SET_ROLES,
  SET_THEME,
  SET_CATEGORİES,
} from "../actions/globalAction";

export const global = {
  categories: [],
  roles: [],
  theme: "light",
  language: "tr",
  loading: true,
  error: null,
};

const globalReducer = (state = { ...global }, action) => {
  switch (action.type) {
    case REQUEST_START_GLOBAL:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case REQUEST_ERROR_GLOBAL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case SET_CATEGORİES:
      return {
        ...state,
        loading: false,
        error: null,
        categories: [...action.payload],
      };
    case SET_ROLES:
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

export default globalReducer;
