import axios from "axios";

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
    category = null,
    filter = null,
    sort = null,
    limit = null,
    offset = null,
  },
  history = null
) => {
  const token = authentication ? localStorage.getItem("token") : undefined;
  const headers = authentication ? { Authorization: token } : {};

  // Parametreleri ekle
  const params = {};
  if (category) params.category = category;
  if (filter) params.filter = filter;
  if (sort) params.sort = sort;
  if (limit) params.limit = limit;
  if (offset) params.offset = offset;

  const instance = axios.create({
    baseURL: "https://workintech-fe-ecommerce.onrender.com",
    timeout: 5000,
    headers,
    params, // Parametreleri buraya ekledik
  });

  instance[method](url, data)
    .then((response) => {
      callbackSuccess && callbackSuccess(response.data);
      if (redirect === "goBack") {
        history.length > 1 ? history.goBack() : history.push("/");
      } else if (redirect) {
        history.push(redirect);
      }
    })
    .catch((error) => {
      callbackError && callbackError(error);
    });
};
