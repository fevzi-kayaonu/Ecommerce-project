import {
  ADD_PRODUCT,
  REQUEST_ERROR_PRODUCT,
  REQUEST_START_PRODUCT,
} from "../actions/productAction";
import {
  SET_FILTER,
  SET_LIMIT,
  SET_OFFSET,
  SET_PRODUCT,
  SET_TOTAL,
} from "../actions/productAction";

export const product = {
  products: [],
  total: 0,
  limit: 12,
  offset: 0,
  filter: "",
  loading: true,
  error: null,
};

const productReducer = (state = { ...product }, action) => {
  switch (action.type) {
    case REQUEST_START_PRODUCT:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case REQUEST_ERROR_PRODUCT:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case SET_PRODUCT:
      return {
        ...state,
        loading: false,
        error: null,
        products: [...action.payload],
      };
    case ADD_PRODUCT:
      return {
        ...state,
        loading: false,
        error: null,
        products: Array.isArray(action.payload)
          ? [...state.products, ...action.payload]
          : [...state.products, action.payload],
      };
    case SET_TOTAL:
      return { ...state, loading: false, error: null, total: action.payload };
    case SET_LIMIT:
      return { ...state, loading: false, error: null, limit: action.payload };
    case SET_OFFSET:
      return { ...state, loading: false, error: null, offset: action.payload };
    case SET_FILTER:
      return { ...state, loading: false, error: null, filter: action.payload }; //filterdan reference type geliyorsa direk atanmıcak
    default:
      return state;
  }
};

export default productReducer;
