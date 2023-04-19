import axios, { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios";

import { getToken } from '../utils/token'
type ServiceInput = {
  path: string;
  data?: any;
  option?: any;
};

const request = axios.create({
  baseURL: import.meta.env.VITE_APP_API,
});

// interceptors

const onRequest = async (config: any): Promise<InternalAxiosRequestConfig> => {
  const jwt = await getToken();

  if (jwt) {
    config = {
      ...config,
      headers: {
        ...config.headers,
        ...({ Authorization: `Bearer ${jwt.toString()}` })
      },
    };
    if (config.authenticatedTransform) {
      config = config.authenticatedTransform(config);
    }
  }
  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  console.error(`[request error] [${JSON.stringify(error)}]`);
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response;
};

const onResponseError = (error: AxiosError): Promise<AxiosError> => {

  return Promise.reject(error);
};

function setupInterceptorsTo(axiosInstance: AxiosInstance): AxiosInstance {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
}

setupInterceptorsTo(request);

// axios

export default class BaseService {
  async get({ path, option = {} }: ServiceInput) {
    const response = await request.get(path, option);
    return response;
  }

  async post({ path, data, option = {} }: ServiceInput) {
    const response = await request.post(path, data, option);
    return response;
  }

  async put({ path, data, option = {} }: ServiceInput) {
    const response = await request.put(path, data, option);
    return response;
  }

  async patch({ path, data, option = {} }: ServiceInput) {
    const response = await request.patch(path, data, option);
    return response;
  }
  async delete({ path, option = {} }: ServiceInput) {
    const response = await request.delete(path, option);
    return response;
  }
}
