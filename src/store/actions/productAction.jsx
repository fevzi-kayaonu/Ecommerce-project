import { METHODS } from "../../util/axiosUtil";

export const SET_PRODUCT_LİST = "SET_PRODUCT_LİST";
export const SET_CATEGORİES = "SET_CATEGORİES";
export const SET_TOTAL = "SET_TOTAL";
export const SET_FETCH_STATE = "SET_FETCH_STATE";
export const SET_LIMIT = "SET_LIMIT";
export const SET_OFFSET = "SET_OFFSET";
export const SET_FILTER = "SET_FILTER";

export const setProductList = (data) => {
  return { type: SET_PRODUCT_LİST, payload: data };
};

export const setCategories = (data) => {
  return { type: SET_CATEGORİES, payload: data };
};

export const setTotal = (data) => {
  return { type: SET_TOTAL, payload: data };
};

export const setFetchState = (data) => {
  return { type: SET_FETCH_STATE, payload: data };
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
  sendRequest(
    {
      url: "/categories",
      method: METHODS.GET,
      callbackSuccess: (data) => {
        dispatch(setCategories(data));
      },
    },
    dispatch
  );
};
