import axios from "axios";

export interface FetchReponse<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "ec20990c62d74822a303580de8a2ba28",
  },
});
