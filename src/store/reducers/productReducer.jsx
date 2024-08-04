import {
  REQUEST_ERROR_PRODUCT,
  REQUEST_START_PRODUCT,
} from "../actions/productAction";
import {
  SET_CATEGORİES,
  SET_FILTER,
  SET_LIMIT,
  SET_OFFSET,
  SET_PRODUCT,
  SET_TOTAL,
} from "../actions/productAction";

const product = {
  categories: [],
  products: [],
  total: 0,
  limit: 10,
  offset: null,
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
        products: [...state.products, ...action.payload],
      };
    case SET_CATEGORİES:
      return {
        ...state,
        loading: false,
        error: null,
        categories: [...action.payload],
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
