import axios from "axios";
// const HTTP_URL = import.meta.env.VITE_API_HTTP_URL;
const HTTP_URL = import.meta.env.VITE_API_LOCAL_HTTP_URL;
export default axios.create({
  baseURL: HTTP_URL,
});
