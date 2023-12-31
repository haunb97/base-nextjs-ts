import axios, { CreateAxiosDefaults } from "axios";

import { ACCESS_TOKEN_KEY } from "@/constants";
import { get, removeAllItem } from "@/services/storage";

const baseConfig = (baseURL: string, contentType = "application/json") => {
  return {
    baseURL,
    headers: {
      "Accept-Language": "*",
      "Content-Type": contentType,
      "Cache-Control": "max-age=10",
    },
  };
};

const interceptAuth = (config: CreateAxiosDefaults<any> | undefined) => {
  const instance = axios.create(config);
  instance.interceptors.request.use((cf) => {
    const token = get(ACCESS_TOKEN_KEY);
    if (token) {
      cf.headers.Authorization = `Bearer ${token}`;
    }
    return cf;
  });
  instance.interceptors.response.use(
    (response) => {
      // Do something with response data
      return response;
    },
    (error) => {
      if (error?.response?.status === 401) {
        removeAllItem();
        window.location.href = "http://localhost:3000/login";
      }
      // Do something with response error
      return Promise.reject(error);
    }
  );
  return instance;
};

export const createService = (
  baseURL: string,
  contentType = "application/json"
) => {
  return interceptAuth(baseConfig(baseURL, contentType));
};

export const downloadFileService = (
  baseURL: string,
  contentType = "application/json"
) => {
  const config = baseConfig(baseURL, contentType);
  return interceptAuth({ ...config, responseType: "blob" });
};

export const createServiceNoToken = (baseURL: string) => {
  const instance = axios.create({
    baseURL,
    headers: {
      "Accept-Language": "*",
      "Content-Type": "application/json",
    },
  });
  instance.interceptors.request.use((config) => {
    return config;
  });
  return instance;
};
