import axios from "axios";
import {
  requestError,
  requestStart,
  requestSuccess,
} from "../store/actions/clientAction";

// API İstek Metodlarını Tanımla
export const METHODS = {
  POST: "post",
  GET: "get",
  PUT: "put",
  DELETE: "delete",
};

// sendRequest Fonksiyonunu Yarat
export const sendRequest = (
  {
    url,
    method,
    data = null,
    redirect = null,
    callbackSuccess = null,
    callbackError = null,
    authentication = false,
  },
  dispatch = null,
  history = null
) => {
  const token = authentication ? localStorage.getItem("token") : undefined;
  const headers = authentication ? { Authorization: token } : {};

  const instance = axios.create({
    baseURL: "https://workintech-fe-ecommerce.onrender.com",
    timeout: 5000,
    headers,
  });

  dispatch && dispatch(requestStart());
  instance[method](url, data === null ? null : data)
    .then((response) => {
      callbackSuccess && callbackSuccess(response.data);
      redirect === "goBack"
        ? history.length > 1
          ? history.goBack()
          : history.push("/")
        : redirect
          ? history.push(redirect)
          : null;
    })
    .catch((error) => {
      dispatch && dispatch(requestError(error.message));
      callbackError && callbackError(error);
    });
};
