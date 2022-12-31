import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-vwl4.onrender.com/api",
});
export default api;
