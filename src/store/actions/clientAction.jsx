import { showToast } from "../../util/ShowToast";
import { METHODS } from "../../util/axiosUtil";
import { sendRequest } from "../../util/axiosUtil";
import { client } from "../reducers/clientReducer";

export const SET_USER = "SET_USER";
export const SET_ROLES = "SET_ROLES";
export const SET_THEME = "SET_THEME";
export const SET_LANGUAGE = "SET_LANGUAGE";

export const REQUEST_START_CLİENT = "REQUEST_START_CLİENT";
export const REQUEST_SUCCESS_CLİENT = "REQUEST_SUCCESS_CLİENT";
export const REQUEST_ERROR_CLİENT = "REQUEST_ERROR_CLİENT";

export const requestStart = () => ({ type: REQUEST_START_CLİENT });
export const requestSuccess = () => ({ type: REQUEST_SUCCESS_CLİENT });
export const requestError = (error) => ({ type: REQUEST_ERROR_CLİENT, error });

export const setUser = (data) => {
  return { type: SET_USER, payload: data };
};

export const setRoles = (data) => {
  return { type: SET_ROLES, payload: data };
};
export const setTheme = (data) => {
  return { type: SET_THEME, payload: data };
};
export const setLanguage = (data) => {
  return { type: SET_LANGUAGE, payload: data };
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

export const getUserWithToken = () => (dispatch) => {
  const token = localStorage.getItem("token");
  token
    ? (dispatch(requestStart()),
      sendRequest({
        url: "/verify",
        method: METHODS.GET,
        callbackSuccess: (data) => {
          dispatch(setUser(data));
        },
        callbackError: (error) => {
          dispatch(requestError(error.message));
          error.response &&
            error.response.status === 401 &&
            localStorage.removeItem("token");
          dispatch(setUser(client.userInfo));
        },
        authentication: true,
      }))
    : ((client.userInfo.loading = false),
      dispatch(setUser(client.userInfo.loading)));
};

export const getUser = (data, history) => (dispatch) => {
  const { rememberMe, ...sendData } = data;
  dispatch(requestStart());
  sendRequest(
    {
      url: "/login",
      method: METHODS.POST,
      data: sendData,
      redirect: "goBack",
      callbackSuccess: (data) => {
        dispatch(setUser(data));
        rememberMe && localStorage.setItem("token", data.token);
        showToast({
          message: "WELCOME",
          type: "success",
          position: "top-right",
          autoClose: 2000,
          closeOnClick: false,
          transition: "Zoom",
          limit: 1,
        });
      },
      callbackError: (error) => {
        dispatch(requestError(error.message));
        showToast({
          message: "Your email or password is incorrect.",
          type: "error",
          position: "top-center",
          autoClose: 5000,
          closeOnClick: false,
          transition: "Bounce",
          limit: 1,
        });
      },
    },
    history
  );
};
