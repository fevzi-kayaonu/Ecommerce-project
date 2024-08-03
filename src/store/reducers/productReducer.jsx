import {
  REQUEST_ERROR,
  REQUEST_START,
  REQUEST_SUCCESS,
} from "../actions/clientAction";
import {
  SET_CATEGORİES,
  SET_FILTER,
  SET_LIMIT,
  SET_OFFSET,
  SET_PRODUCT_LİST,
  SET_TOTAL,
} from "../actions/productAction";

const product = {
  categories: [],
  productList: [],
  total: null,
  limit: 10,
  offset: null,
  filter: "",
  loading: false,
  error: null,
};

const productReducer = (state = product, action) => {
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
    case SET_PRODUCT_LİST:
      return { ...state, productList: [...state.productList, action.payload] };
    case SET_CATEGORİES:
      return { ...state, categories: [...action.payload] };
    case SET_TOTAL:
      return { ...state, total: action.payload };
    case SET_LIMIT:
      return { ...state, limit: action.payload };
    case SET_OFFSET:
      return { ...state, offset: action.payload };
    case SET_FILTER:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};

export default productReducer;
