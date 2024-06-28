import qs from "qs";
import FormData from "form-data";

export class ApiError extends Error {
  code: number;
  data: any;

  constructor(message: string | undefined, code: number, data: any) {
    super(message);
    this.name = "ApiError";
    this.code = code;
    this.data = data;
  }
}

const unfetch: UnfetchFn = async (host, path, method, data, token, options) => {
  const url = buildUrl(host, path, method, data);
  const body = getBody(method, data);
  const initOptions = buildOptions(
    options,
    method,
    body,
    token,
    data instanceof FormData
  );
  const res = await fetch(url, initOptions);

  if (res.redirected) {
    return {
      ok: res.ok,
      status: res.status,
      redirectedUrl: res.url,
      data: {},
    };
  }
  if (res.status === 204) {
    return {
      ok: res.ok,
      status: res.status,
      data: {},
    };
  }

  const responseText = await res.text();
  let response;
  try {
    response = JSON.parse(responseText);
  } catch (e) {
    response = {
      text: responseText,
    };
  }

  if (res.status >= 400) {
    throw new ApiError(response.message || "ApiError", res.status, response);
  }
  return {
    ok: res.ok,
    status: res.status,
    data: response,
  };
};

const buildUrl: BuildUrlFn = (host, path, method, params) => {
  const url = `${host}${path}`;
  const isFormData = params instanceof FormData;
  const isGetMethod = typeof method == "undefined" || method === "GET";

  if (isFormData || !isGetMethod) {
    return url;
  }

  let queryString = buildQueryString(params);
  if (queryString.length == 0) {
    return url;
  }

  return `${url}${queryString}`;
};

const buildOptions: BuildOptionsFn = (
  defaultOptions,
  method,
  body,
  token,
  isFormData
) => {
  const authorization = token ? `Bearer ${token}` : undefined;
  const contentType = !isFormData ? "application/json" : undefined;
  let headers = defaultOptions?.headers || new Headers();
  if (headers instanceof Headers) {
    if (authorization) {
      headers.append("Authorization", authorization);
    }
    if (contentType) {
      headers.append("Accept", contentType);
      headers.append("Content-Type", contentType);
    }
  }

  return {
    ...(defaultOptions || {}),
    headers,
    method: method || "GET",
    body: body,
  };
};

const getBody: GetBodyFn = (method, data) => {
  const isGetMethod = typeof method == "undefined" || method === "GET";
  if (data instanceof FormData) {
    return data;
  }
  if (isGetMethod) {
    return null;
  }

  return JSON.stringify(data);
};

const buildQueryString: BuildQsFn = (params) => {
  if (!params) {
    return "";
  }

  return qs.stringify(params, { skipNulls: true, addQueryPrefix: true });
};

export default unfetch;
