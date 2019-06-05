import axios from "axios";

const api = axios.create({
  baseURL: "https://neoassist-backend.herokuapp.com"
});

export default api;
