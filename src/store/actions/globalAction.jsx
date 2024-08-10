import { METHODS } from "../../util/axiosUtil";
import { sendRequest } from "../../util/axiosUtil";

export const SET_ROLES = "SET_ROLES";
export const SET_THEME = "SET_THEME";
export const SET_LANGUAGE = "SET_LANGUAGE";
export const SET_CATEGORİES = "SET_CATEGORİES";

export const REQUEST_START_GLOBAL = "REQUEST_START_GLOBAL";
export const REQUEST_ERROR_GLOBAL = "REQUEST_ERROR_GLOBAL";

export const requestStart = () => ({ type: REQUEST_START_GLOBAL });
export const requestError = (error) => ({ type: REQUEST_ERROR_GLOBAL, error });

export const setRoles = (data) => {
  return { type: SET_ROLES, payload: data };
};
export const setTheme = (data) => {
  return { type: SET_THEME, payload: data };
};
export const setLanguage = (data) => {
  return { type: SET_LANGUAGE, payload: data };
};

export const setCategories = (data) => {
  return { type: SET_CATEGORİES, payload: data };
};

export const getRoles = () => (dispatch) => {
  dispatch(requestStart());
  sendRequest(
    {
      url: "/roles",
      method: METHODS.GET,
      callbackSuccess: (data) => {
        dispatch(setRoles(data));
      },
      callbackError: (error) => {
        dispatch(requestError(error.message));
      },
    },
    dispatch
  );
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
