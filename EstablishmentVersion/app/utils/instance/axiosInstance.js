import axios from "axios";

const axiosClient = axios.create({
    baseURL:"http://192.168.4.2:3000/",
    headers:{"Content-Type": "application/json"},
    timeout: 5000
});


export const client = {
  delete: axiosClient.delete,
  get: axiosClient.get,
  post: axiosClient.post,
  put: axiosClient.put,
  patch: axiosClient.patch,
};
