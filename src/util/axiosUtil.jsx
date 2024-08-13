import axios from "axios";

export const METHODS = {
  POST: "post",
  GET: "get",
  PUT: "put",
  DELETE: "delete",
};

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
    params,
  });

  instance[method](url, data)
    .then((response) => {
      callbackSuccess && callbackSuccess(response.data);
      if (redirect === "goBack") {
        const previousURL = document.referrer;
        const previousPathname = new URL(previousURL).pathname;
        console.log(previousPathname);

        history.length > 1 && previousPathname !== "/register"
          ? history.goBack()
          : history.push("/");
      } else if (redirect) {
        history.push(redirect);
      }
    })
    .catch((error) => {
      callbackError && callbackError(error);
    });
};
