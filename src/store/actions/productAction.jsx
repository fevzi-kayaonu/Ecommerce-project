import { METHODS, sendRequest } from "../../util/axiosUtil";

export const SET_PRODUCT = "SET_PRODUCT";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const SET_CATEGORİES = "SET_CATEGORİES";
export const SET_TOTAL = "SET_TOTAL";
export const SET_LIMIT = "SET_LIMIT";
export const SET_OFFSET = "SET_OFFSET";
export const SET_FILTER = "SET_FILTER";

export const REQUEST_START_PRODUCT = "REQUEST_START_PRODUCT";
export const REQUEST_ERROR_PRODUCT = "REQUEST_ERROR_PRODUCT";

export const requestStart = () => ({ type: REQUEST_START_PRODUCT });
export const requestError = (error) => ({ type: REQUEST_ERROR_PRODUCT, error });

export const setProduct = (data) => {
  return { type: SET_PRODUCT, payload: data };
};

export const addProduct = (data) => {
  return { type: ADD_PRODUCT, payload: data };
};

export const setCategories = (data) => {
  return { type: SET_CATEGORİES, payload: data };
};

export const setTotal = (data) => {
  return { type: SET_TOTAL, payload: data };
};

export const setLimit = (data) => {
  return { type: SET_LIMIT, payload: data };
};

export const setOffset = (data) => {
  return { type: SET_OFFSET, payload: data };
};

export const setFilter = (data) => {
  return { type: SET_FILTER, payload: data };
};

export const getCategories = () => (dispatch) => {
  dispatch(requestStart());
  sendRequest({
    url: "/categories",
    method: METHODS.GET,
    callbackSuccess: (data) => {
      dispatch(setCategories(data));
    },
    callbackError: (error) => {
      dispatch(requestError(error.message));
    },
  });
};

export const getProducts =
  ({
    category = null,
    filter = null,
    sort = null,
    limit = 25,
    offset = 0,
    add = false,
  }) =>
  (dispatch) => {
    const callBackAction = (data) => {
      add
        ? dispatch(addProduct(data.products))
        : dispatch(setProduct(data.products));
    };
    dispatch(requestStart());
    sendRequest({
      url: "/products",
      method: METHODS.GET,
      category: category,
      filter: filter,
      sort: sort,
      limit: limit,
      offset: offset,
      callbackSuccess: (data) => {
        callBackAction(data);
        dispatch(setTotal(data.total));
      },
      callbackError: (error) => {
        dispatch(requestError(error.message));
      },
    });
  };
