import axios, { AxiosRequestConfig } from "axios";

export interface FetchReponse<T> {
  count: number;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "ec20990c62d74822a303580de8a2ba28",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchReponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
}

export default APIClient;
