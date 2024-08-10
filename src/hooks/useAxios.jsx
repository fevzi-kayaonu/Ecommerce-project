import { useDispatch } from "react-redux";
import axios from "axios";
import { useHistory } from "react-router-dom";
// Aksiyonları doğru bir şekilde import edin// Token selector'ını import edin
import {
  requestError,
  requestStart,
  requestSuccess,
} from "../components/store/actions/clientAction";
import { useAuthToken } from "./useAuthToken";

export const METHODS = {
  POST: "post",
  GET: "get",
  PUT: "put",
  DELETE: "delete",
};

const useAxios = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const token = useAuthToken(); // Güncel token'ı almak için selector'ı kullan

  const sendRequest = ({
    url,
    method,
    data = null,
    redirect = null,
    callbackSuccess = null,
    callbackError = null,
    authentication = false,
  }) => {
    // Authentication başlığı ayarla
    const headers = authentication
      ? { Authorization: `Bearer ${token}` } // Güncel token'ı kullan
      : {};

    // Axios instance'ını oluştur
    const instance = axios.create({
      baseURL: "https://workintech-fe-ecommerce.onrender.com",
      timeout: 5000,
      headers,
    });

    dispatch(requestStart());
    instance[method](url, data === null ? null : data)
      .then((response) => {
        dispatch(requestSuccess());
        callbackSuccess && callbackSuccess(response.data);
        redirect && history.push(redirect);
      })
      .catch((error) => {
        dispatch(requestError(error.message));
        callbackError && callbackError(error.message);
      });
  };

  return { sendRequest, METHODS };
};

export default useAxios;
