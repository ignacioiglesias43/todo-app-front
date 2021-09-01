import axios, { AxiosResponse, Method } from "axios";

const api = axios.create({
  baseURL: "localhost:8080",
});

const request = <T>(
  method: Method,
  url: string,
  params: any
): Promise<AxiosResponse<T>> =>
  api.request<T>({
    method,
    url,
    params,
  });

export default request;
