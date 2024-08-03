import { showToast } from "../../util/ShowToast";
import { METHODS } from "../../util/axiosUtil";
import { sendRequest } from "../../util/axiosUtil";
import { client } from "../reducers/clientReducer";

export const SET_USER = "SET_USER";
export const SET_ROLES = "SET_ROLES";
export const SET_THEME = "SET_THEME";
export const SET_LANGUAGE = "SET_LANGUAGE";

export const REQUEST_START = "REQUEST_START";
export const REQUEST_SUCCESS = "REQUEST_SUCCESS";
export const REQUEST_ERROR = "REQUEST_ERROR";

export const requestStart = () => ({ type: REQUEST_START });
export const requestSuccess = () => ({ type: REQUEST_SUCCESS });
export const requestError = (error) => ({ type: REQUEST_ERROR, error });

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
  sendRequest(
    {
      url: "/roles",
      method: METHODS.GET,
      callbackSuccess: (data) => {
        dispatch(setRoles(data));
      },
    },
    dispatch
  );
};

export const getUserWithToken = () => (dispatch) => {
  const token = localStorage.getItem("token");
  token
    ? sendRequest(
        {
          url: "/verify",
          method: METHODS.GET,
          callbackSuccess: (data) => {
            dispatch(setUser(data));
          },
          callbackError: (err) => {
            err.response &&
              err.response.status === 401 &&
              localStorage.removeItem("token");
            dispatch(setUser(client.userInfo));
          },
          authentication: true,
        },
        dispatch
      )
    : ((client.userInfo.loading = false),
      dispatch(setUser(client.userInfo.loading)));
};

export const getUser = (data, history) => (dispatch) => {
  const { rememberMe, ...sendData } = data;
  sendRequest(
    {
      url: "/login",
      method: METHODS.POST,
      data: sendData,
      redirect: "goBack",
      callbackSuccess: (data) => {
        console.log("gir : ", data);
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
      callbackError: () => {
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
    dispatch,
    history
  );
};
