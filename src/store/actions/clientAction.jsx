import { showToast } from "../../util/ShowToast";
import { METHODS } from "../../util/axiosUtil";
import { sendRequest } from "../../util/axiosUtil";
import { client } from "../reducers/clientReducer";

export const SET_USER = "SET_USER";
export const SET_ADDRESS = "SET_ADDRESS";
export const SET_CREDIT_CARD = "SET_CREDIT_CARD";
export const ADD_ADDRESS = "ADD_ADDRESS";
export const ADD_CREDIT_CARD = "ADD_CREDIT_CARD";
export const REMOVE_ADDRESS = "REMOVE_ADDRESS";
export const REMOVE_CREDIT_CARD = "REMOVE_CREDIT_CARD";
export const UPDATE_ADDRESS = "UPDATE_ADDRESS";
export const UPDATE_CREDIT_CARD = "UPDATE_CREDIT_CARD";

export const REQUEST_START_CLİENT = "REQUEST_START_CLİENT";
export const REQUEST_SUCCESS_CLİENT = "REQUEST_SUCCESS_CLİENT";
export const REQUEST_ERROR_CLİENT = "REQUEST_ERROR_CLİENT";

export const requestStart = (loadingKey = "local") => ({
  type: REQUEST_START_CLİENT,
  payload: loadingKey,
});
export const requestError = (error, loadingKey = "local") => ({
  type: REQUEST_ERROR_CLİENT,
  payload: {
    error,
    loadingKey,
  },
});

export const setUser = (data) => {
  return { type: SET_USER, payload: data };
};
export const setAddress = (data) => {
  return { type: SET_ADDRESS, payload: data };
};
export const setCreditCard = (data) => {
  return { type: SET_CREDIT_CARD, payload: data };
};
export const addAddress = (data) => {
  return { type: ADD_ADDRESS, payload: data };
};
export const addCreditCard = (data) => {
  return { type: ADD_CREDIT_CARD, payload: data };
};
export const removeAddress = (data) => {
  return { type: REMOVE_ADDRESS, payload: data };
};
export const removeCreditCart = (data) => {
  return { type: REMOVE_CREDIT_CARD, payload: data };
};

export const updateAddress = (data) => {
  return { type: UPDATE_ADDRESS, payload: data };
};
export const updateCreditCard = (data) => {
  return { type: UPDATE_CREDIT_CARD, payload: data };
};

export const getUserWithToken = () => (dispatch) => {
  const token = localStorage.getItem("token");
  token
    ? (dispatch(requestStart("userInfo")),
      sendRequest({
        url: "/verify",
        method: METHODS.GET,
        callbackSuccess: (data) => {
          dispatch(setUser(data));
        },
        callbackError: (error) => {
          dispatch(requestError(error.message, "userInfo"));
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
  dispatch(requestStart("userInfo"));
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
        dispatch(requestError(error.message, "userInfo"));
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

export const getAddress = () => (dispatch) => {
  dispatch(requestStart());
  sendRequest({
    url: "/user/address",
    method: METHODS.GET,
    authentication: true,
    callbackSuccess: (data) => {
      dispatch(setAddress(data));
      console.log("data : ", data);
    },
    callbackError: (error) => {
      dispatch(requestError(error.message));
    },
  });
};

export const getCreditCards = () => (dispatch) => {
  dispatch(requestStart());
  sendRequest({
    url: "/user/card",
    method: METHODS.GET,
    authentication: true,
    callbackSuccess: (data) => {
      dispatch(setCreditCard(data));
      console.log("data:", data);
    },
    callbackError: (error) => {
      dispatch(requestError(error.message));
    },
  });
};

export const postAddress = (data) => (dispatch) => {
  dispatch(requestStart());
  sendRequest({
    url: "/user/address",
    method: METHODS.POST,
    data,
    authentication: true,
    callbackSuccess: (data) => {
      dispatch(addAddress(data[0]));
      console.log("data : ", data[0]);
    },
    callbackError: (error) => {
      dispatch(requestError(error.message));
    },
  });
};

export const postCreditCards = (data) => (dispatch) => {
  dispatch(requestStart());
  sendRequest({
    url: "/user/card",
    method: METHODS.POST,
    data,
    authentication: true,
    callbackSuccess: (data) => {
      dispatch(addCreditCard(data[0]));
      console.log("Crditcartdata:", data);
    },
    callbackError: (error) => {
      dispatch(requestError(error.message));
    },
  });
};

export const deleteAddress = (id) => (dispatch) => {
  dispatch(requestStart());
  const callBackAction = () => {
    dispatch(removeAddress(id));
  };
  sendRequest({
    url: `/user/address/${id}`,
    method: METHODS.DELETE,
    authentication: true,
    callbackSuccess: (data) => {
      callBackAction();
    },
    callbackError: (error) => {
      dispatch(requestError(error.message));
    },
  });
};
export const deleteCreditCard = (id) => (dispatch) => {
  dispatch(requestStart());
  const callBackAction = () => {
    dispatch(removeCreditCart(id));
  };
  sendRequest({
    url: `/user/card/${id}`,
    method: METHODS.DELETE,
    authentication: true,
    callbackSuccess: (data) => {
      callBackAction();
    },
    callbackError: (error) => {
      dispatch(requestError(error.message));
    },
  });
};

export const editAddress = (data) => (dispatch) => {
  dispatch(requestStart());
  sendRequest({
    url: "/user/address",
    method: METHODS.PUT,
    data,
    authentication: true,
    callbackSuccess: (data) => {
      dispatch(updateAddress(data[0]));
    },
    callbackError: (error) => {
      dispatch(requestError(error.message));
    },
  });
};

export const editCreditCard = (data) => (dispatch) => {
  dispatch(requestStart());
  sendRequest({
    url: "/user/card",
    method: METHODS.PUT,
    data,
    authentication: true,
    callbackSuccess: (data) => {
      dispatch(updateCreditCard(data[0]));
    },
    callbackError: (error) => {
      dispatch(requestError(error.message));
    },
  });
};
