import { METHODS, sendRequest } from "../../util/axiosUtil";

export const SET_PRODUCT = "SET_PRODUCT";
export const SET_CATEGORİES = "SET_CATEGORİES";
export const SET_TOTAL = "SET_TOTAL";
export const SET_LIMIT = "SET_LIMIT";
export const SET_OFFSET = "SET_OFFSET";
export const SET_FILTER = "SET_FILTER";

export const REQUEST_START_PRODUCT = "REQUEST_START_PRODUCT";
export const REQUEST_SUCCESS_PRODUCT = "REQUEST_SUCCESS_PRODUCT";
export const REQUEST_ERROR_PRODUCT = "REQUEST_ERROR_PRODUCT";

export const requestStart = () => ({ type: REQUEST_START_PRODUCT });
export const requestSuccess = () => ({ type: REQUEST_SUCCESS_PRODUCT });
export const requestError = (error) => ({ type: REQUEST_ERROR_PRODUCT, error });

export const setProduct = (data) => {
  return { type: SET_PRODUCT, payload: data };
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

export const getProducts = (location) => (dispatch) => {
  const parts = location?.split("/");
  dispatch(requestStart());
  const url = location
    ? `/products?category=${parts[parts.length - 1]}`
    : "/products";
  sendRequest({
    url,
    method: METHODS.GET,
    callbackSuccess: (data) => {
      dispatch(setProduct(data.products));
      dispatch(setTotal(data.total));
    },
    callbackError: (error) => {
      dispatch(requestError(error.message));
    },
  });
};
