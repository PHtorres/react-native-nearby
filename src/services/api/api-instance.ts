import axios from "axios";

export const apiInstance = axios.create({
  baseURL: "http://localhost:3333",
  timeout: 700,
});
